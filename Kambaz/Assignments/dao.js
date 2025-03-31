import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
export const findAssignmentForCourse = (courseId) => {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course == courseId);
};
export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
};
export const deleteAssignment = (assignmentId) => {
  const { assignments } = Database;
  Database.assignments = assignments.filter(
    (assignment) => assignment._id !== assignmentId
  );
};
export const updateAssignment = (assignmentId, assignmentUpdates) => {
  const { assignments } = Database;
  const updatedAssignments = assignments.map((assignment) =>
    assignment._id === assignmentId
      ? { ...assignment, ...assignmentUpdates }
      : assignment
  );
  Database.assignments = updatedAssignments;
  return updatedAssignments.find(
    (assignment) => assignment._id == assignmentId
  );
};
