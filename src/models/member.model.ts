import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stack: { type: String, required: true },
  level: { type: String, required: true },
});

const Member = mongoose.model("Member", memberSchema);

export { Member };
