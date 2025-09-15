import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";

/**
 * Datastores are a Slack-hosted location to store
 * and retrieve data for your app.
 * https://api.slack.com/automation/datastores
 */
export default DefineDatastore({
  name: "scouts",
  primary_key: "id",
  attributes: {
    id: {
      type: Schema.types.string,
    },
    user_id: {
      type: Schema.slack.types.user_id,
    },
    start_ts: {
      type: Schema.slack.types.timestamp,
    },
    next_user_id: {
      type: Schema.slack.types.user_id,
    }
  },
});
