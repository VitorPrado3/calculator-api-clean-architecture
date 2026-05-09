import { FastifyReply, FastifyRequest } from "fastify";

export class HealthController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send({
      status: "ok",
    });
  }
}
