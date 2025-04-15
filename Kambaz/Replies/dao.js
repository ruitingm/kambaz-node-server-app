import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export const findRepliesForPost = (courseId, postId) => {
  return model.find({ post: postId, course: courseId });
};
export const creatReply = (reply) => {
  const newReply = { ...reply, _id: uuidv4() };
  return model.create(newReply);
};
export const updateReply = (replyId, replyUpdates) => {
  return model.updateOne({ _id: replyId }, replyUpdates);
};
