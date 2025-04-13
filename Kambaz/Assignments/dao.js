import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export const findAssignmentForCourse = (courseId) => {
  return model.find({ course: courseId });
};
export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
};
export const deleteAssignment = (assignmentId) => {
  return model.deleteOne({ _id: assignmentId });
};
export const updateAssignment = (assignmentId, assignmentUpdates) => {
  return model.updateOne({ _id: assignmentId }, assignmentUpdates);
};
