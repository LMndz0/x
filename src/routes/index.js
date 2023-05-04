import { Router } from "express";

const router = new Router();

router.get("/test", (req, res) => {
  const data = {
    name: "mndz"
  };
  res.json(data);
});

export default router;
