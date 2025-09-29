import { DefineFunction, Schema } from "deno-slack-sdk/mod.ts";

export const INTERPRET_COMMAND_FUNCTION_CALLBACK_ID = "interpret_command";
/**
 * This is a custom function manifest definition which
 * creates and sends an announcement draft to a channel.
 *
 * More on defining functions here:
 * https://api.slack.com/automation/functions/custom
 */
export const InterpretCommandFunction = DefineFunction({
  callback_id: INTERPRET_COMMAND_FUNCTION_CALLBACK_ID,
  title: "Interpret user command",
  description:
    "Handling of any user commands",
  source_file: "functions/interpret_command/handler.ts",
  input_parameters: {
    properties: {
      created_by: {
        type: Schema.slack.types.user_id,
      },
      message: {
        type: Schema.types.string,
      },
      channel: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: [
      "created_by",
      "message",
      "channel",
    ],
  },
});
