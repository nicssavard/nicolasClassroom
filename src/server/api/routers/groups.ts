import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const groupsRouter = createTRPCRouter({
  getGroups: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.group.findMany();
  }),
});
