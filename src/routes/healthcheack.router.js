import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { healthcheck } from "../controllers/healthcheack.controller.js";


const router = Router();

router.route("/helth-check").get(verifyJWT, healthcheck);

export default router;