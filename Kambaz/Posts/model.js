import mongoose from "mongoose";
import schema from "./schema.js";
const model = new mongoose.model("PostSchema", schema);
export default model;
