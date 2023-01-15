import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { subjectsRouter } from "./routers/subjects";
import { classesRouter } from "./routers/classes";
import { teachersRouter } from "./routers/teacher";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  subjects: subjectsRouter,
  classes: classesRouter,
  teachers: teachersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
