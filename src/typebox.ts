import { createInsertSchema, createSelectSchema } from "drizzle-zod";
// import { Type } from "@sinclair/typebox";
// import { Value } from "@sinclair/typebox/value";
import { z } from "zod";

import * as schema from "./db/schema";

const insertUserSchema = createInsertSchema(schema.users);
const selectUserSchema = createSelectSchema(schema.users);
export const insertTodoSchema = createInsertSchema(schema.todo);
