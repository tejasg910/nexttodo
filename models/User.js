import mongoose1, { mongo } from "mongoose";

const userSchema = new mongoose1.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at" } }
);
