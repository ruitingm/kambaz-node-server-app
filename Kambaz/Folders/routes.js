import * as folderDao from "./dao.js";
import * as postDao from "../Posts/dao.js";
export default function FolderRoutes(app) {
  app.put("/api/folders/:folderId", async (req, res) => {
    const { folderId } = req.params;
    const folderUpdates = req.body;
    const status = await folderDao.updateFolder(folderId, folderUpdates);
    res.send(status);
  });
  app.delete("/api/folders/:folderId", async (req, res) => {
    const { folderId } = req.params;
    const status = await replyDao.deleteModule(folderId);
    res.send(status);
  });
  app.get("/api/folders", async (req, res) => {
    const folders = await folderDao.findAllFolders();
    res.json(folders);
  });
  app.get("/api/posts/:courseId/:folderId", async (req, res) => {
    const { courseId, folderId } = req.params;
    const { userId, role } = req.query;
    const posts = await postDao.filterPostByFolder(
      courseId,
      folderId,
      userId,
      role
    );
    res.json(posts);
  });
}
