import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const classesRouter = createTRPCRouter({
  getClasses: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.class.findMany();
  }),
  getClassesForSubject: publicProcedure
    .input(z.object({ subject_id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.class.findMany({
        where: {
          subject_id: input.subject_id,
        },
      });
    }),
});
