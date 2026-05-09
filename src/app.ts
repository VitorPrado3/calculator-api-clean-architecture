import Fastify from "fastify";

import { calculatorRoutes } from "./modules/calculator/routes/calculator.routes";
import { healthRoutes } from "./modules/health/routes/health.routes";

export const app = Fastify();

app.register(calculatorRoutes);
app.register(healthRoutes)