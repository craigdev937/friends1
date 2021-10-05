import express from "express";
import { Index } from "../controllers/friendCon.js";

export const friendRt = express.Router();
    friendRt.get("/", Index);



