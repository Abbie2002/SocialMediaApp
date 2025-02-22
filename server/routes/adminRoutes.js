import express from "express";
import { getUsers, deleteUser } from "../controllers/adminController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.get("/users", authMiddleware, getUsers);
router.delete("/users/:userId", authMiddleware, deleteUser);

export default router;