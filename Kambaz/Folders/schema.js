import mongoose from "mongoose";
const FolderSchema = new mongoose.Schema(
  {
    _id: String,
    folder: [String],
  },
  {
    collection: "folders",
  }
);
export default FolderSchema;
