import express from "express";
import cors from "cors";
import { AuthRoutes } from "./modules/auth/auth.routes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import { notFound } from "./middlewares/notFound";

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.use("/api/auth", AuthRoutes);

app.use(notFound);
app.use(globalErrorHandler);

export default app;
