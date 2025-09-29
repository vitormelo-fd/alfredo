import { SlackAPIClient } from "deno-slack-api/types.ts";
import PullRequestDatastore from "../../../datastores/pull_requests.ts";

export async function add(
  client: SlackAPIClient,
  inputs: { user_id: string; channel_id: string },
  args: string[],
) {
  const response = await client.apps.datastore.put({
    datastore: PullRequestDatastore.name,
    item: {
      created_at: Date.now(),
      github_url: args[0],
      status: "open",
      author_id: inputs.user_id,
      title: "test title",
    },
  });
}
