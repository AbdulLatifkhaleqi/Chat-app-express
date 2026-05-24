import server from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";

const startServer = async () => {
  await connectDB();

  server.listen(env.port, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
};

startServer();
