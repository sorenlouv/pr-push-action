import * as core from '@actions/core';
import { context } from '@actions/github';
import { EventPayloads } from '@octokit/webhooks';
import { exec } from '@actions/exec';

export type Inputs = {
  accessToken: string;
  comment: string;
  command: string;
};

async function init() {
  const payload = context.payload as EventPayloads.WebhookPayloadIssueComment;
  const { actor } = context;

  const inputs: Inputs = {
    accessToken: core.getInput('access_token', { required: true }),
    comment: core.getInput('comment', { required: true }),
    command: core.getInput('command', { required: true }),
  };

  if (payload.comment.body !== inputs.comment) {
    console.log('Aborting. Not relevant comment');
    return;
  }

  await exec(`git config --global user.name "${actor}"`);
  await exec(
    `git config --global user.email "github-action-${actor}@users.noreply.github.com"`
  );

  await exec(inputs.command);
  await exec('git add -u');
  await exec(`git commit -m "Result of \"${inputs.command}\""`);
  await exec('git push');
  console.log(JSON.stringify(payload), inputs);
}

init().catch((error) => {
  console.log('An error occurred', error);
  core.setFailed(error.message);
});
