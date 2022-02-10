import express from "express";
import dotenv from "dotenv";
import { router } from "./routes";
import cors from "cors";
dotenv.config();

export const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(process.env.PORT || 3333, () => console.log("servidor ligado"));
