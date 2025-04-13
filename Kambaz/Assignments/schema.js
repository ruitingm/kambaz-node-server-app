import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    due: String,
    available: String,
    until: String,
    points: String,
  },
  {
    collection: "assignments",
  }
);
export default assignmentSchema;
