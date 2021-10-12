import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: 'string',
      required: true
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: 'Anonymous',
    },
    attachment: String,
    LikeCount: {
      type: Number,
      default: 0
    }
  },
  { timestamp: true}

);

export const PostModel = mongoose.model('Post', schema)