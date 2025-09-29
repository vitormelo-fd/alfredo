import { Manifest } from "deno-slack-sdk/mod.ts";
import PullRequestsDatastore from "./datastores/pull_requests.ts";
import ScoutsDatastore from "./datastores/scouts.ts";
import ScrumMastersDatastore from "./datastores/scrum_masters.ts";
import VacationsDatastore from "./datastores/vacations.ts";
import ExclusionsDatastore from "./datastores/exclusions.ts";
import { PullRequestCustomType } from "./functions/pull_requests/types.ts";

export default Manifest({
  name: "alfredo",
  description: "Useful butler for all processes related to the team",
  icon: "assets/icon.png",
  outgoingDomains: [],
  datastores: [
    PullRequestsDatastore,
    ScoutsDatastore,
    ScrumMastersDatastore,
    VacationsDatastore,
    ExclusionsDatastore,
  ],
  types: [PullRequestCustomType],
  workflows: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "chat:write.customize",
    "datastore:read",
    "datastore:write",
  ],
});
