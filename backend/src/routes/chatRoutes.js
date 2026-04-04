import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { getStreamToken } from "../controllers/chatController.js";

const router = express.Router()
// /api/chat/token
router.get("/token",protectRoute,getStreamToken)
export default router;