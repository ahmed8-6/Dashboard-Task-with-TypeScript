import { Router } from "express";
import {
  addMemberForm,
  addMember,
  modifyMemberForm,
  modifyMember,
  deleteMember,
} from "../controllers/members.controller.js";
const router = Router();

router.route("/add").get(addMemberForm).post(addMember);
router.route("/modify/:memberId").get(modifyMemberForm).put(modifyMember);
router.route("/delete/:memberId").delete(deleteMember);

export default router;
