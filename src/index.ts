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
  const payload = context.payload as EventPayloads.WebhookPayloadPullRequest;
  const { actor } = context;

  await exec(`git config --global user.name "${actor}"`);
  await exec(
    `git config --global user.email "github-action-${actor}@users.noreply.github.com"`
  );

  const inputs: Inputs = {
    accessToken: core.getInput('access_token', { required: true }),
    comment: core.getInput('comment', { required: true }),
    command: core.getInput('command', { required: true }),
  };

  console.log(payload, inputs);

  core.setOutput('lolz', 'hey');
}

init().catch((error) => {
  console.log('An error occurred', error);
  core.setFailed(error.message);
});
