import dotenv from "dotenv";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import methodOverride from "method-override";
import mongoose from "mongoose";
import homeRoute from "./routes/home.route.js";
import membersRoute from "./routes/members.route.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const dbUri: string = process.env.DB_LOCAL as string;

mongoose.connect(dbUri).then(() => {
  console.log("connecting to the database");
});

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", homeRoute);
app.use("/members", membersRoute);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).render("error", {
    title: "Error",
    errorMessage: error.message || "Something went wrong",
  });
});

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
