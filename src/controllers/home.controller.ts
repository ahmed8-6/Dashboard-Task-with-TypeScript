import type { NextFunction, Request, Response } from "express";
import { Member } from "../models/member.model.js";

type MemberQuery = {
  name?: RegExp;
  stack?: string;
  level?: string;
};

export const home = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    let { search, stack, level } = req.query;
    if (stack == "all") stack = undefined;
    if (level == "all") level = undefined;
    const queryObj: MemberQuery = {};

    if (search) {
      queryObj.name = new RegExp(search as string, "i");
    }

    if (stack) {
      queryObj.stack = stack as string;
    }

    if (level) {
      queryObj.level = level as string;
    }

    const members = await Member.find(queryObj);

    res.render("index", {
      title: "Dashboard",
      members,
    });
  } catch (error) {
    next(error);
  }
};
