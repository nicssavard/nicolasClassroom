import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const classesRouter = createTRPCRouter({

  getClassesForSubject: publicProcedure.input(z.object({ subject: z.union([z.string(), z.array(z.string())]) })).query(({ ctx, input }) => {
    console.log('test')
    console.log(input.subject)
    if (Array.isArray(input.subject)) {
      return ctx.prisma.class.findMany({
        where: {
          subject_name: {
            in: input.subject
          }
        },
      });
    }
    return ctx.prisma.class.findMany({
        where: {
          subject_name: input.subject,
        },
      });
  }),
// getClassesForSubject: publicProcedure.query(({ ctx }) => {
//     return ctx.prisma.class.findMany();
//   }),


});