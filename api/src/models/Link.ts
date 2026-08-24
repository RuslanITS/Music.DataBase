import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
});

const Link = mongoose.model("Link", linkSchema);

export default Link;