import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const flashcardsRouter = createTRPCRouter({
  getFlashcards: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.flashcard.findMany();
  }),
  getFlashcardsByClass: publicProcedure
    // .input(z.object({ class: z.union([z.number(), z.array(z.number())]) }))
    .input(z.object({ class_id: z.number() }))
    .query(({ ctx, input }) => {
      // if (Array.isArray(input.class)) {
      //   return ctx.prisma.flashcard.findMany({
      //     where: {
      //       class_id: {
      //         in: input.class,
      //       },
      //     },
      //   });
      // }
      return ctx.prisma.flashcard.findMany({
        where: {
          class_id: input.class_id,
        },
      });
    }),
  getFlashcardsBySubject: publicProcedure
    .input(z.object({ subject_id: z.number() }))
    .query(({ ctx, input }) => {
      // if (Array.isArray(input.subject)) {
      //   return ctx.prisma.flashcard.findMany({
      //     where: {
      //       subject_name: {
      //         in: input.subject,
      //       },
      //     },
      //   });
      // }
      return ctx.prisma.flashcard.findMany({
        where: {
          subject_id: input.subject_id,
        },
      });
    }),
});
