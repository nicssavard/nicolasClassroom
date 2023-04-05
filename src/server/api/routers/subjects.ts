import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const subjectsRouter = createTRPCRouter({
  getSubjects: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.subject.findMany();
  }),
  createSubject: publicProcedure
    .input(
      z.object({
        name: z.string(),
        imageName: z.any(),
        image: z.any(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log("input", input);
      console.log(input.image);
      const { name, imageName } = input;

      // You may want to handle the image file upload and storage here
      // (e.g., upload to cloud storage and get the image URL)

      const subject = await ctx.prisma.subject.create({
        data: {
          id: Math.floor(Math.random() * 1000000) + 1, //not the best solution
          name,
          image: imageName!, // replace 'image.url' with the actual image URL after uploading
        },
      });

      return subject;
    }),
});
