//import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const subjectsRouter = createTRPCRouter({
  getSubjects: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.subject.findMany();
  }),
});
