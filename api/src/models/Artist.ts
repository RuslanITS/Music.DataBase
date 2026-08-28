import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  info:{
    type: String,
    required: true,
  },

});

const Artist = mongoose.model( "Artist", ArtistSchema );

export default Artist;