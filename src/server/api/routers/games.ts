import { createTRPCRouter, publicProcedure } from "../trpc";

export const gamesRouter = createTRPCRouter({
  getGames: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.game.findMany();
  }),
});
