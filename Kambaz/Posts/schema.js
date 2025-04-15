import mongoose from "mongoose";
const PostSchema = new mongoose.Schema(
  {
    _id: String,
    user: String,
    course: String,
    subject: String,
    type: { type: String, enum: ["note", "question"] },
    private: Boolean,
    post: String,
    date: String,
    liked: Boolean,
    role: { type: String, enum: ["STUDENT", "FACULTY", "ADMIN", "USER"] },
    category: String,
    read: Boolean,
    answered: Boolean,
  },
  {
    collection: "posts",
  }
);
export default PostSchema;
