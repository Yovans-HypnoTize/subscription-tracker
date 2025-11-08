import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getAllSubscriptions, getSubscriptionById, getUserSubscriptions } from "../controllers/subscription.controller.js";


const subscriptionRouter = Router();

subscriptionRouter.get("/", authorize, getAllSubscriptions)
subscriptionRouter.get("/:id",authorize, getSubscriptionById)
subscriptionRouter.post("/", authorize, createSubscription)
subscriptionRouter.put("/:id", (req, res) => res.send({title:"PUT subscription detail"}))
subscriptionRouter.delete("/:id", (req, res) => res.send({title:"DELETE subscription"}))
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions)
subscriptionRouter.put("/:id/cancel", (req, res) => res.send({title:"CANCEL subscription"}))
subscriptionRouter.get("/upcoming-renewals", (req,res) =>  res.send({title:"GET upcoming renewals"}))

export default subscriptionRouter