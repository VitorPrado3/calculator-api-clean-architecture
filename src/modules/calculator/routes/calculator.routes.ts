import { FastifyInstance } from "fastify";

import { SumController } from "../controllers/SumController";

export async function calculatorRoutes(app: FastifyInstance) {
  const sumController = new SumController();

  app.post("/sum", sumController.handle);
}
