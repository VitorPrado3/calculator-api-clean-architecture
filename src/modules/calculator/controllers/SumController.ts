import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

import { SumService } from "../services/SumService";

export class SumController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
      number1: z.number(),
      number2: z.number(),
      number3: z.number(),
    });

    const { number1, number2, number3 } = bodySchema.parse(request.body);

    const sumService = new SumService();

    const result = sumService.execute({
      number1,
      number2,
      number3,
    });

    return reply.status(200).send({
      result,
    });
  }
}
