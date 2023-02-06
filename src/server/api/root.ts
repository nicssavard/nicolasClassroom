import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { subjectsRouter } from "./routers/subjects";
import { classesRouter } from "./routers/classes";
import { teachersRouter } from "./routers/teacher";
import { flashcardsRouter } from "./routers/flashcards";
import { usersRouter } from "./routers/users";
import { groupsRouter } from "./routers/groups";
import { homeworksRouter } from "./routers/homework";
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
  flashcards: flashcardsRouter,
  users: usersRouter,
  groups: groupsRouter,
  homeworks: homeworksRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
