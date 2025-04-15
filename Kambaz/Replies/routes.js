import * as replyDao from "./dao.js";
export default function PostRoutes(app) {
  app.delete("/api/posts/:postId/replies", async (req, res) => {
    const { postId } = req.params;
    const status = await replyDao.deleteReply(postId);
    res.send(status);
  });
  app.put("/api/replies/:replyId", async (req, res) => {
    const { replyId } = req.params;
    const replyUpdates = req.body;
    const status = await replyDao.updateReply(replyId, replyUpdates);
    res.send(status);
  });
}
