import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export const findAllFolders = () => {
  return model.find();
};
export const findFoldersForCourse = (courseId) => {
  return model.find({ _id: courseId });
};
export const createFolder = (folder) => {
  const newFolder = { ...folder, _id: uuidv4() };
  return model.create(newFolder);
};
export const updateFolder = (folderId, folderUpdates) => {
  return model.updateOne({ _id: folderId }, folderUpdates);
};
export function deleteFolder(folderId) {
  return model.deleteOne({ _id: folderId });
}
