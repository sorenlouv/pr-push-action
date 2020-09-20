import * as core from '@actions/core';
import { runAction } from './runAction';
import { context } from '@actions/github';
import { EventPayloads } from '@octokit/webhooks';

export type Inputs = {
  accessToken: string;
  comment: string;
  command: string;
};

const payload = context.payload as EventPayloads.WebhookPayloadIssueComment;
const inputs: Inputs = {
  accessToken: core.getInput('access_token', { required: true }),
  comment: core.getInput('comment', { required: true }),
  command: core.getInput('command', { required: true }),
};

runAction(payload, inputs).catch((error) => {
  console.log('An error occurred', error);
  core.setFailed(error.message);
});
