import express from "express";
import Artist from "../models/Artist";

const router = express.Router();

router.get("/", async (req, res) => {
  const artists = await Artist.find();

  res.send(artists);
});

router.post("/", async (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    info: req.body.info,
  });

  await artist.save();

  res.send(artist);
});

export default router;