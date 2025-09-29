import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

/**
 * Datastores are a Slack-hosted location to store
 * and retrieve data for your app.
 * https://api.slack.com/automation/datastores
 */
export default DefineDatastore({
  name: "pull_requests",
  primary_key: "github_url",
  attributes: {
    conversation_id: {
      type: Schema.types.string,
    },
    created_at: {
      type: Schema.slack.types.timestamp,
    },
    jira_id: {
      type: Schema.types.string,
    },
    thread_url: {
      type: Schema.types.string,
    },
    status: {
      type: Schema.types.string,
    },
    title: {
      type: Schema.types.string,
    },
    author_id: {
      type: Schema.slack.types.user_id,
    },
    github_url: {
      type: Schema.types.string,
    },
    team:{
      type: Schema.types.string,
    }
  },
});
