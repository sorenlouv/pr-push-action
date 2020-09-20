import * as core from '@actions/core';
import { context } from '@actions/github';
import { EventPayloads } from '@octokit/webhooks';
import { exec } from '@actions/exec';
import stringArgv from 'string-argv';

export type Inputs = {
  comment: string;
  command: string;
};

async function init() {
  const payload = context.payload as EventPayloads.WebhookPayloadIssueComment;
  const { actor } = context;

  const inputs: Inputs = {
    comment: core.getInput('comment', { required: true }),
    command: core.getInput('command', { required: true }),
  };

  if (payload.comment.body !== inputs.comment) {
    console.log('Aborting. Not relevant comment');
    return;
  }

  console.log(`"${inputs.comment}" -> "${inputs.command}"`);
  const [cmd, ...cmdArgs] = stringArgv(inputs.command);
  console.log({ cmd, cmdArgs });

  await exec(`git config --global user.name "${actor}"`);
  await exec(
    `git config --global user.email "github-action-${actor}@users.noreply.github.com"`
  );

  await exec(cmd, cmdArgs);
  await exec('git', ['add', '-u']);
  await exec('git', ['commit', '-m', `Result of "${inputs.command}"`]);
  await exec('git', ['push']);
  console.log(JSON.stringify(payload), inputs);
}

init().catch((error) => {
  console.log('An error occurred', error);
  core.setFailed(error.message);
});
