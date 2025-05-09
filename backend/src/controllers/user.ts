import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const response = await prisma.user.create({
      data: {
        name: username,
        email,
        password: hashedPassword,
      },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
export const findUser = async (req: Request, res: Response) => {
  const response = await prisma.user.findMany();

  try {
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
