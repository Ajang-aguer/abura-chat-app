import express from "express";
import router from "../routes";

export const apiGateway = express.Router();

apiGateway.use("/users", router);
apiGateway.use("/messages", router);
