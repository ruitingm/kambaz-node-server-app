import mongoose from "mongoose";
const ReplySchema = new mongoose.Schema(
  {
    _id: String,
    post: { type: String, ref: "PostModel" },
    user: String,
    reply: String,
    date: String,
    role: String,
    resolved: Boolean,
    type: String,
    followup: [{ _id: String, user: String, content: String, date: String }],
  },
  {
    collection: "replies",
  }
);
export default ReplySchema;
