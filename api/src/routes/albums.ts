import express from "express";
import mongoose from "mongoose";
import Album from "../models/Album";

const router = express.Router();

router.get("/", async (req, res) => {
  const { artist } = req.query;

  if (typeof artist === "string") {
    const albums = await Album.find({
      artist: new mongoose.Types.ObjectId(artist),
    }).populate("artist");

    return res.send(albums);
  }

  const albums = await Album.find().populate("artist");

  res.send(albums);
});

router.get("/:id", async (req, res) => {
  const album = await Album.findById(req.params.id).populate("artist");

  res.send(album);
});

router.post("/", async (req, res) => {
  const album = new Album({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    year: req.body.year,
    artist: req.body.artist,
  })

  await album.save();

  res.send(album)
})

export default router