import { Router } from "express";
import { createUser, deleteUserById, fetchUserById, fetchUsers, updateUser } from "../controllers/UserController.js";

const userRoutes = Router();

userRoutes.get("/", fetchUsers);
userRoutes.get("/:id", fetchUserById);
userRoutes.post("/", createUser);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUserById);

export default userRoutes;