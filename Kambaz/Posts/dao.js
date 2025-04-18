import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export const findPostsForCourse = (courseId) => {
  return model.find({ course: courseId });
};
export const createPost = (post) => {
  const newPost = { ...post, _id: uuidv4() };
  return model.create(newPost);
};
export const updatePost = (postId, postUpdates) => {
  return model.updateOne({ _id: postId }, postUpdates);
};
export const findPostByKeywords = (keywords) => {
  const regex = new RegExp(keywords, "i");
  return model.find({
    $or: [{ post: { $regex: regex } }, { subject: { $regex: regex } }],
  });
};
