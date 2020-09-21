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
  const listeners = {
    stdout: (data: Buffer) => {
      console.log('stdout', data.toString());
    },
    stderr: (data: Buffer) => {
      console.log('stdrr', data.toString());
    },
  };

  await exec('ls', ['-al'], { cwd: repoPath, listeners });
  await exec('pwd', [], { cwd: repoPath, listeners });

  await exec(
    'git',
    [
      'clone',
      '--depth',
      '1',
      '--single-branch',
      '--branch',
      branchName,
      `https://x-access-token:${inputs.accessToken}@github.com/${repoOwner}/${repoName}.git`,
      '.',
    ],
    opts
  );

  console.log({ opts });

  await exec('git', ['config', 'user.name', 'github-actions'], opts);
  await exec(
    'git',
    ['config', 'user.email', 'github-actions@github.com'],
    opts
  );

  // await exec(cmd, cmdArgs, opts);
  await exec('yarn', ['bump'], opts);
  await exec('git', ['add', '-u'], opts);
  await exec('git', ['commit', '-m', `Result of "${inputs.command}"`], opts);
  await exec('git', ['push', 'origin', branchName], opts);
}
