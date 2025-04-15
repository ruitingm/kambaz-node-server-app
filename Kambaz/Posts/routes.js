import * as postDao from "./dao.js";
export default function PostRoutes(app) {
  app.put("/api/posts/:postId", async (req, res) => {
    const { postId } = req.params;
    const postUpdates = req.body;
    const status = await postDao.updatePost(postId, postUpdates);
    res.send(status);
  });
}
