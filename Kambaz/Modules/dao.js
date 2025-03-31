import { v4 as uuidv4 } from "uuid";
import Database from "../Database/index.js";
export function findModulesForCourse(courseId) {
  const { modules } = Database;
  return modules.filter((module) => module.course === courseId);
}
export const createModule = (module) => {
  const newModule = { ...module, _id: uuidv4() };
  Database.modules = [...Database.modules, newModule];
  return newModule;
};
export function deleteModule(moduleId) {
  const { modules } = Database;
  Database.modules = modules.filter((module) => module._id !== moduleId);
}
export const updateModule = (moduleId, moduleUpdates) => {
  const { modules } = Database;
  const updatedModules = modules.map((module) =>
    module._id === moduleId ? { ...module, ...moduleUpdates } : module
  );
  Database.modules = updatedModules;
  return updatedModules.find((module) => module._id === moduleId);
};
