import type { NextFunction, Request, Response } from "express";
import { Member } from "../models/member.model.js";

const addMemberForm = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.render("add-member", {
    title: "Add member",
  });
};

const addMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { name, stack, level } = req.body;
  try {
    if (!name || !stack || !level) {
      res.status(400).render("error", {
        title: "Error",
        errorMessage: "name, stack and level are required",
      });
      return;
    }

    const newMember = new Member({
      name,
      stack,
      level,
    });
    await newMember.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

const modifyMemberForm = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { memberId } = req.params;
  try {
    const member = await Member.findById(memberId);
    res.render("modify-member", {
      title: "Modify member",
      member,
    });
  } catch (error) {
    next(error);
  }
};

const modifyMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { memberId } = req.params;
  const { name, stack, level } = req.body;
  try {
    await Member.updateOne({ _id: memberId }, { name, stack, level });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

const deleteMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { memberId } = req.params;
  try {
    await Member.findByIdAndDelete(memberId);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

export {
  addMemberForm,
  addMember,
  modifyMemberForm,
  modifyMember,
  deleteMember,
};
