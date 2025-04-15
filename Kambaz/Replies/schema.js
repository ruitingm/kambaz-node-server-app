import mongoose from "mongoose";
const ReplySchema = new mongoose.Schema(
  {
    _id: String,
    post: { type: String, ref: "PostModel" },
    user: String,
    reply: String,
    followup: [{ user: String, content: String }],
  },
  {
    collection: "replies",
  }
);
export default ReplySchema;
