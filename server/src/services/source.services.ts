import { scrapeWebsite } from "../lib/firecrawl.js";
import {
  createSourceRecord,
  type SourceRecord,
} from "../repository/source.repositry.js";
import { NotFoundError } from "../types/app-error.js";

import { ImportWebsiteInput } from "../validators//source.validator.js";

import { getWorkspaceByIdForUser } from "./workspace.services.js";

async function assertWorksapceAccess(workspaceId: string, userId: string) {
  await getWorkspaceByIdForUser(workspaceId, userId);
}

async function createAndProcessSource(
  data: Parameters<typeof createSourceRecord>[0],
) {
  const source = await createSourceRecord(data);
}
