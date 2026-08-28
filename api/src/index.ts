import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import artistsRouter from "./routes/artists";
import albumsRouter from "./routes/albums";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use("/artists", artistsRouter);
app.use("/albums", albumsRouter);

const run = async () => {
  await mongoose.connect("mongodb://localhost:27017/music");

  console.log("MongoDB connected!");

  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
};

run().catch((e) => console.error(e));