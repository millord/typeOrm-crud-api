import express from "express";
import "reflect-metadata";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import { createConnection } from "typeorm";

const app = express();
createConnection();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use(userRoutes);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
