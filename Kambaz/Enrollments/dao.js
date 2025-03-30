import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export const enrollUserInCourse = (userId, courseId) => {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  console.log("enroll");
  console.log(Database.enrollments);
};
export const unenrollUserFromCourse = (userId, courseId) => {
  const { enrollments } = Database;
  console.log(userId, courseId);
  Database.enrollments = enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
  console.log("unenroll");
  console.log(Database.enrollments);
};
