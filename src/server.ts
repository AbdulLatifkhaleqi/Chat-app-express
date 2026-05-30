import app from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";
import http from "http";

const server = http.createServer(app);

const startServer = async () => {
  await connectDB();

  server.listen(env.port, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
};

startServer();
