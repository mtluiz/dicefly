import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const roomRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1), description: z.string().min(1), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.room.create({
        data: {
          name: input.name,
          description: input.description,
          password: input.password,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
