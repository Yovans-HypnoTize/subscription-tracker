import { Router } from "express";
import { sendRemainders } from "../controllers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.post("/subscription/remainder", sendRemainders);

export default workflowRouter;
