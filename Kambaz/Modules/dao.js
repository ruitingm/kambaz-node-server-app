import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}
export const createModule = (module) => {
  const newModule = { ...module, _id: uuidv4() };
  return model.create(newModule);
};
export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
}
export const updateModule = (moduleId, moduleUpdates) => {
  model.updateOne({ _id: moduleId }, moduleUpdates);
};
