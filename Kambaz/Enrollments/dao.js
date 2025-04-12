import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
export const enrollUserInCourse = (userId, courseId) => {
  return model.create({ user, course });
};
export const unenrollUserFromCourse = (user, course) => {
  return model.deleteOne({ user, course });
};
