import { Router } from "express";
import Link from "../models/Link";

const router = Router();

router.get("/:shortUrl", async (req, res) => {
  try {
    const link = await Link.findOne({
      shortUrl: req.params.shortUrl,
    });

    if (!link) {
      return res.status(404).json({
        error: "Short URL not found",
      });
    }

    res.status(301).redirect(link.originalUrl);
  } catch (e) {
    console.error(e);

    res.status(500).json({
      error: "Internal server error",
    });
  }
});

export default router;