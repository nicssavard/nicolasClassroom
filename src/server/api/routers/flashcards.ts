import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const flashcardsRouter = createTRPCRouter({
  getFlashcards: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.flashcard.findMany();
  }),
  getFlashcardsByClass: publicProcedure
    .input(z.object({ class_id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.flashcard.findMany({
        where: {
          class_id: input.class_id,
        },
      });
    }),
  getFlashcardsBySubject: publicProcedure
    .input(z.object({ subject_id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.flashcard.findMany({
        where: {
          subject_id: input.subject_id,
        },
      });
    }),
});
