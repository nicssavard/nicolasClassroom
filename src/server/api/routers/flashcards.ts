import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const flashcardsRouter = createTRPCRouter({
  getFlashcards: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.flashcard.findMany();
  }),
  getFlashcardsByClass: publicProcedure
    .input(z.object({ class: z.union([z.string(), z.array(z.string())]) }))
    .query(({ ctx, input }) => {
      if (Array.isArray(input.class)) {
        return ctx.prisma.flashcard.findMany({
          where: {
            class_name: {
              in: input.class,
            },
          },
        });
      }
      return ctx.prisma.flashcard.findMany({
        where: {
          class_name: input.class,
        },
      });
    }),
  getFlashcardsBySubject: publicProcedure
    .input(z.object({ subject: z.string() }))
    .query(({ ctx, input }) => {
      if (Array.isArray(input.subject)) {
        return ctx.prisma.flashcard.findMany({
          where: {
            subject_name: {
              in: input.subject,
            },
          },
        });
      }
      return ctx.prisma.flashcard.findMany({
        where: {
          subject_name: input.subject,
        },
      });
    }),
});
