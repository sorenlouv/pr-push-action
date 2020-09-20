import { EventPayloads } from '@octokit/webhooks';
import { exec } from '@actions/exec';
import stringArgv from 'string-argv';
import { Context } from '@actions/github/lib/context';
import { Inputs } from '.';

export async function runAction(
  payload: EventPayloads.WebhookPayloadIssueComment,
  actor: Context['actor'],
  inputs: Inputs
) {
  if (payload.comment.body !== inputs.comment) {
    console.log('Aborting. Not relevant comment');
    return;
  }

  console.log(`Received comment: "${inputs.comment}"`);
  const [cmd, ...cmdArgs] = stringArgv(inputs.command);
  console.log('Command: ', { cmd, cmdArgs });

  await exec('git', ['config', 'user.name', 'github-actions']);
  await exec('git', ['config', 'user.email', 'github-actions@github.com']);
  await exec(cmd, cmdArgs);
  await exec('git', ['add', '-u']);
  await exec('git', ['commit', '-m', `Result of "${inputs.command}"`]);
  await exec('git', ['remote', '-v']);
  // await exec('git', ['push']);
}
