import type { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import CallAlfredoWorkflow from "../workflows/call_alfredo.ts";

/**
 * This is a definition file for a shortcut link trigger
 * For more on triggers and other trigger types:
 * https://api.slack.com/automation/triggers
 */
const trigger: Trigger<
  typeof CallAlfredoWorkflow.definition
> = {
  type: TriggerTypes.Shortcut,
  name: "Alfredo",
  description: "Call Alfredo",
  workflow: `#/workflows/${CallAlfredoWorkflow.definition.callback_id}`,
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
