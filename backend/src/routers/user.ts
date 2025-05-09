import { Router } from "express";
import { createUser, findUser } from "../controllers/user";

export const userRouter = Router();
userRouter.post("/", createUser as any);
userRouter.get("/", findUser as any);
