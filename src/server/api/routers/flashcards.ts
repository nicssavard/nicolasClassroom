import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const flashcardsRouter = createTRPCRouter({
  getFlashcardsByClass: publicProcedure
    .input(z.object({ class: z.union([z.string(), z.array(z.string())]) }))
    .query(({ ctx, input }) => {
      console.log("test");
      console.log(input.class);
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
});
