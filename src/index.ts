import * as core from '@actions/core';
import { runAction } from './runAction';
import { context } from '@actions/github';
import { EventPayloads } from '@octokit/webhooks';

export type Inputs = {
  comment: string;
  command: string;
};

const payload = context.payload as EventPayloads.WebhookPayloadIssueComment;
const { actor } = context;
const inputs: Inputs = {
  comment: core.getInput('comment', { required: true }),
  command: core.getInput('command', { required: true }),
};

runAction(payload, actor, inputs).catch((error) => {
  console.log('An error occurred', error);
  core.setFailed(error.message);
});
