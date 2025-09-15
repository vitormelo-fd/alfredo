import type { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import CreateAnnouncementWorkflow from "../workflows/create_announcement.ts";

/**
 * This is a definition file for a shortcut link trigger
 * For more on triggers and other trigger types:
 * https://api.slack.com/automation/triggers
 */
const trigger: Trigger<
  typeof CreateAnnouncementWorkflow.definition
> = {
  type: TriggerTypes.Shortcut,
  name: "Add Pull Request",
  description:
    "Add a Pull Request to review in a global channel",
  workflow: `#/workflows/${CreateAnnouncementWorkflow.definition.callback_id}`,
  shortcut: {
    button_text: "Add Pull Request",
  },
  inputs: {
    created_by: {
      value: TriggerContextData.Shortcut.user_id,
    },
    interactivity: {
      value: TriggerContextData.Shortcut.interactivity,
    },
  },
};

export default trigger;
