import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import connectMongo from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectMongo();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/path", authRoutes);

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
