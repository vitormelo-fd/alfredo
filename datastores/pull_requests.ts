import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

/**
 * Datastores are a Slack-hosted location to store
 * and retrieve data for your app.
 * https://api.slack.com/automation/datastores
 */
export default DefineDatastore({
  name: "pull_requests",
  primary_key: "id",
  attributes: {
    id: {
      type: Schema.types.string,
    },
    url: {
      type: Schema.types.string,
    },
    title: {
      type: Schema.types.string,
    },
    status: {
      type: Schema.types.string,
    },
    author_id: {
      type: Schema.slack.types.user_id,
    },
    created_at: {
      type: Schema.slack.types.timestamp,
    },
    message_ts: {
      type: Schema.types.string,
    },
  },
});
