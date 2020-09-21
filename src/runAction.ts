import { EventPayloads } from '@octokit/webhooks';
import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
const exec = promisify(execCallback);
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
  console.log(`Received command: "${inputs.command}"`);

  const opts = { cwd: process.env.GITHUB_WORKSPACE };
  await exec(`git checkout ${branchName}`, opts);
  await exec(inputs.command, opts);
  await exec('git add -u', opts);
  await exec(`git commit -m 'Result of "${inputs.command}"'`, opts);
  await exec(`git push origin ${branchName}`, opts);
}
