import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  getUsers: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  getUsersByGroup: publicProcedure
    .input(z.object({ group_id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findMany({
        where: {
          group_id: input.group_id,
        },
      });
    }),
  getUserByName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({
        where: {
          name: input.name,
        },
      });
    }),
  addOnePoint: publicProcedure
    .input(z.object({ username: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.updateMany({
        where: {
          username: input.username,
        },
        data: {
          points: {
            increment: 1,
          },
        },
      });
    }),
});
