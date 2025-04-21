import mongoose from "mongoose";
const PostSchema = new mongoose.Schema(
  {
    _id: String,
    user: String,
    course: { type: String, ref: "CourseModel" },
    subject: String,
    type: { type: String, enum: ["note", "question"] },
    private: Boolean,
    post: String,
    date: String,
    liked: Boolean,
    role: { type: String, enum: ["STUDENT", "FACULTY", "ADMIN", "USER"] },
    category: { type: [String], ref: "FolderModel" },
    read: Boolean,
    answered: Boolean,
    resolved: Boolean,
    visible: [String],
    view: [String],
  },
  {
    collection: "posts",
  }
);
export default PostSchema;
