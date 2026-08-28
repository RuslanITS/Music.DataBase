// import { Router } from "express";
// import generateUniqueShortUrl from "../utils/generateShortUrl";
// import generateShortUrl from "../utils/generateShortUrl";
// import Link from "../models/Link";
// import type { CreateLinkBody } from "../types";
//
// const router = Router();
//
// router.post("/", async (req, res) => {
//   const body = req.body as CreateLinkBody;
//
//   if (typeof body.url !== "string" || !body.url) {
//     return res.status(400).json({
//       error: "URL is required",
//     });
//   }
//
//   try {
//     const url = new URL(body.url);
//
//     if (url.protocol !== "http:" && url.protocol !== "https:") {
//       return res.status(400).json({
//         error: "Only HTTP and HTTPS URLs are allowed",
//       });
//     }
//   } catch {
//     return res.status(400).json({
//       error: "Invalid URL",
//     });
//   }
//
//   try {
//     const shortUrl = await generateUniqueShortUrl();
//
//     const link = await Link.create({
//       shortUrl,
//       originalUrl: body.url,
//     });
//
//     res.status(201).json(link);
//
//     res.json(link);
//   } catch (e) {
//     console.error(e);
//
//     res.status(500).json({
//       error: "Internal server error",
//     });
//   }
// });
// export default router;