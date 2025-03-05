import express from "express";
import { register, login } from "../controllers/userController";
import { getMessages } from "../controllers/messageController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/messages", getMessages);

export default router;
