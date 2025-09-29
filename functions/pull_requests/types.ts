import { DefineType, Schema } from "deno-slack-sdk/mod.ts";

export const PullRequestCustomType = DefineType({
  name: "PullRequest",
  type: Schema.types.object,
  properties: {
    title: {
      type: Schema.types.string,
    },
    mergeable: {
      type: Schema.types.boolean,
    },
    author_id: {
      type: Schema.slack.types.user_id,
    },
    repository_name: {
      type: Schema.types.string,
    },
    creation_timestamp: {
      type: Schema.slack.types.timestamp,
    },
    url: {
      type: Schema.types.string,
    },
    task_url: {
      type: Schema.types.string,
    },
    thread_url: {
      type: Schema.slack.types.conversation_id,
    },
    jira_task_id: {
      type: Schema.types.string,
    },
  },
  required: [
    "title",
    "author_id",
    "creation_timestamp",
    "url",
    "task_url",
    "thread_url",
    "jira_task_id"
  ],
});

export type PullRequestType = {
  title: string;
  mergeable?: boolean;
  author_id: string;
  repository_name?: string;
  creation_timestamp: string;
  url: string;
  task_url: string;
  thread_url: string;
  jira_task_id: string;
};

