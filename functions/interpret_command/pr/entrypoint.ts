import { SlackAPIClient } from "deno-slack-api/types.ts";
import { add } from "./add.ts";
import { list } from "./list.ts";

export async function entrypoint(
  client: SlackAPIClient,
  inputs: { user_id: string; channel_id: string },
  args: string[],
) {
  if (!args.length) {
  }
  switch (args[0].toLowerCase()) {
    case "list":
      await list(client, inputs);
      break;
    case "add":
      await add(client, inputs, args);
      break;
    default:
      break;
  }
}
