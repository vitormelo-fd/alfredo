import { SlackFunction } from "deno-slack-sdk/mod.ts";

import { InterpretCommandFunction } from "./definition.ts";

export default SlackFunction(
  InterpretCommandFunction,
  async ({ inputs, client }) => {
    const { message } = inputs;
    const [subcommand, ...args] = message.split(" ");
    switch (subcommand.toLowerCase()) {
      case "pr":
        break;
      case "scrum":
        break;
      case "scout":
        break;
      case "vacations":
        break;
      default:
        // show message with the actions that the bot can do
        break;
    }
    return {};
  },
);
