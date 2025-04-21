import model from "./model.js";
export const findPostsForCourse = (courseId, userId, role) => {
  if (role === "FACULTY") {
    return model.find({
      course: courseId,
      $or: [
        { visible: "All Users" },
        { visible: "Instructor" },
        { visible: userId },
      ],
    });
  } else {
    return model.find({
      course: courseId,
      $or: [{ visible: "All Users" }, { visible: userId }],
    });
  }
};
export const createPost = (post) => {
  // const newPost = { ...post, _id: uuidv4() };
  const newPost = { ...post };
  return model.create(newPost);
};
export const updatePost = (postId, postUpdates) => {
  return model.updateOne({ _id: postId }, postUpdates);
};
export const findPostByKeywords = (courseId, userId, role, keywords) => {
  const regex = new RegExp(keywords, "i");
  const visibilityFilter =
    role === "FACULTY"
      ? [
          { visible: "All Users" },
          { visible: "Instructor" },
          { visible: userId },
        ]
      : [{ visible: "All Users" }, { visible: userId }];

  return model.find({
    $and: [
      { course: courseId },
      { $or: visibilityFilter },
      {
        $or: [{ post: { $regex: regex } }, { subject: { $regex: regex } }],
      },
    ],
  });
};
export function deletePost(postId) {
  return model.deleteOne({ _id: postId });
}
export const filterPostByFolder = (courseId, folder, userId, role) => {
  if (role === "FACULTY") {
    return model.find({
      course: courseId,
      category: { $in: [folder] },
      $or: [
        { visible: "All Users" },
        { visible: "Instructor" },
        { visible: userId },
      ],
    });
  } else {
    return model.find({
      course: courseId,
      category: { $in: [folder] },
      $or: [{ visible: "All Users" }, { visible: userId }],
    });
  }
};
