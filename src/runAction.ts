import { EventPayloads } from '@octokit/webhooks';
import { exec } from '@actions/exec';
import stringArgv from 'string-argv';
import { Inputs } from '.';
import { Octokit } from '@octokit/rest';

export async function runAction(
  payload: EventPayloads.WebhookPayloadIssueComment,
  inputs: Inputs
) {
  if (payload.comment.body !== inputs.comment.trim()) {
    console.log('Aborting. Not relevant comment');
    return;
  }

  const repoOwner = payload.repository.owner.login;
  const repoName = payload.repository.name;
  const octokit = new Octokit();
  const pullRequest = await octokit.pulls.get({
    owner: repoOwner,
    repo: repoName,
    pull_number: payload.issue.number,
  });

  const branchName = pullRequest.data.head.ref;

  console.log(`Received comment: "${inputs.comment}"`);
  const [cmd, ...cmdArgs] = stringArgv(inputs.command);
  console.log('Command: ', { cmd, cmdArgs });

  const repoPath = process.env.GITHUB_WORKSPACE;
  const opts = { cwd: repoPath };

  await exec('ls', ['-al'], opts);
  await exec('pwd', [], opts);
  await exec('cat', ['package.json'], opts);

  await exec('git', ['fetch'], opts); //TODO might not be needed
  await exec('git', ['checkout', 'test-pr'], opts);
  await exec(cmd, cmdArgs, opts);
  await exec('yarn', [], opts);
  await exec('git', ['add', '-u'], opts);
  await exec('git', ['commit', '-m', `Result of "${inputs.command}"`], opts);
  await exec('git', ['push', 'origin', branchName], opts);
}
