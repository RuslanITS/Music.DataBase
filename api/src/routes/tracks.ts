import express from "express";
import mongoose from "mongoose";
import Album from "../models/Album";
import Track from "../models/Track";

const router = express.Router();

router.get("/", async (req, res) => {
  const { album } = req.query;

  if (typeof album === "string") {
    const tracks = await Track.find({
      album: new mongoose.Types.ObjectId(album),
    }).populate("album");

    return res.send(tracks);
  }

  const tracks = await Track.find().populate("album");

  res.send(tracks);
});

router.get("/:id", async (req, res) => {
  const track = await Track.findById(req.params.id).populate('album');

  res.send(track)
})

router.post("/", async (req, res) => {
  try {
    const album = await Album.findById(req.body.album);

    if (!album) {
      return res.status(404).send({
        message: "Album not found",
      });
    }

    const track = new Track({
      name: req.body.name,
      duration: req.body.duration,
      album: req.body.album,
    });

    await track.save();

    res.send(track);
  } catch (e) {
    res.status(500).send({
      message: "Something went wrong",
    });
  }
});

export default router;