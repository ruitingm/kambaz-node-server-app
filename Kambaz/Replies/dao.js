import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export const findRepliesForPost = (postId) => {
  return model.find({ post: postId });
};
export const creatReply = (reply) => {
  const newReply = { ...reply, _id: uuidv4() };
  return model.create(newReply);
};
export const updateReply = (replyId, replyUpdates) => {
  return model.updateOne({ _id: replyId }, replyUpdates);
};
export function deleteReply(replyId) {
  return model.deleteOne({ _id: replyId });
}
