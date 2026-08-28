import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  year:{
    type: String,
    required: true,
  },

  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
});

const Album = mongoose.model( "Album", AlbumSchema);

export default Album;