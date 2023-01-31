import { createTRPCRouter, publicProcedure } from "../trpc";

export const teachersRouter = createTRPCRouter({
  getOneTeacher: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.teacher.findFirst();
  }),
});
