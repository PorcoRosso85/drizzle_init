import {
  drizzle,
  type BetterSQLite3Database,
} from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import * as schema from "./schema";

const sqlite = new Database("sqlite3.db");
const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, { schema });

await db.insert(schema.users).values({ name: "Por" });

const result = await db.select().from(schema.users);
console.log("select result: ", result);
