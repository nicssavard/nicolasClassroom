import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const classesRouter = createTRPCRouter({
  getClasses: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.class.findMany();
  }),
  getClassesForSubject: publicProcedure
    //.input(z.object({ subject: z.union([z.string(), z.array(z.string())]) }))
    .input(z.object({ subject_id: z.number() }))
    .query(({ ctx, input }) => {
      // if (Array.isArray(input.subject)) {
      //   return ctx.prisma.class.findMany({
      //     where: {
      //       subject_name: {
      //         in: input.subject,
      //       },
      //     },
      //   });
      // }
      return ctx.prisma.class.findMany({
        where: {
          subject_id: input.subject_id,
        },
      });
    }),
});
