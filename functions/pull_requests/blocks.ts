import { PullRequestType } from "./types";
import { KnownBlock, Block, ContextBlock, MrkdwnElement, FieldsBlock, ActionsBlock, ButtonElement } from "@slack/types";

const pullRequestBlocks = (
  team: string,
  pullRequestBlocks: PullRequestType[],
  teamEmoji?: string,
): (KnownBlock | Block)[] => {

  const blocks: KnownBlock[] = [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "Open PRs",
      },
    },
    contextBlock(
      mrkdwnElement(`*Team*: ${teamEmoji ? teamEmoji : ""} ${team}`),
      mrkdwnElement(`*Total Open PRs*: ${pullRequestBlocks.length}`)
    ),
    dividerBlock
  ];

  for (const pr of pullRequestBlocks) {
    blocks.push(
      fieldsBlock(
      mrkdwnElement(`*${pr.title}*`),
      mrkdwnElement(`*Can be merged? ${pr.mergeable ? ":tick:" : ":x:"}*`),
    ),
    contextBlock(
      mrkdwnElement(`*Author:* ${pr.author_id}`),
      mrkdwnElement(`*Repository:* ${pr.repository_name}`),
      mrkdwnElement(`*Created at:* ${pr.creation_timestamp}`)
    ),
    actionsBlock(
      buttonElement(":github: View PR", pr.url),
      buttonElement(`:jira: ${pr.jira_task_id}`, pr.task_url),
      buttonElement(":slack: Thread", pr.thread_url)
    ),
    dividerBlock()
  );
  }

  return blocks;
}

function buttonElement(text: string, url: string): ButtonElement {
  return {
    "type": "button",
    "text": {
      "type": "plain_text",
      "text": text,
      "emoji": true,
    },
    "url": url,
  };
}

function actionsBlock(...elements: any): ActionsBlock {
  return {
    "type": "actions",
    "elements": elements,
  };
}

function fieldsBlock(...elements: any): FieldsBlock {
  return {
    "type": "fields",
    "fields": elements,
  };
}


function contextBlock(...elements: any): ContextBlock {
  return {
    "type": "context",
    "elements": elements,
  };
}

function mrkdwnElement(text: string): MrkdwnElement {
  return {
    "type": "mrkdwn",
    "text": text,
  };
}

function dividerBlock(): KnownBlock {
  return {
    "type": "divider",
  };
}