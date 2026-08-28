import express from "express";
import Track from "../models/Track";


const router = express.Router();

router.get("/", async (req, res) => {
  const track = await Track.find().populate('album');

  res.send(track)
})

router.get("/:id", async (req, res) => {
  const track = await Track.findById(req.params.id).populate('album');

  res.send(track)
})

router.post("/", async (req, res) => {
  const track = new Track({
    name:req.body.name,
    duration: req.body.duration,
    album: req.body.album,
  })

  await track.save();

  res.send(track);

})


export default router;