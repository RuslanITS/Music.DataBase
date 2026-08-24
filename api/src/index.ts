import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import linksRouter from "./routes/links";
import redirectRouter from "./routes/redirect";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use("/links", linksRouter);
app.use("/", redirectRouter);

const run = async () => {
  await mongoose.connect("mongodb://localhost:27017/shortener");

  console.log("MongoDB connected!");

  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
};

run().catch((e) => console.error(e));