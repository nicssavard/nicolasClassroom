import { createTRPCRouter, publicProcedure } from "../trpc";

export const homeworksRouter = createTRPCRouter({
  getHomeworks: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.homework.findMany();
  }),
});
