import { Router } from "express";
import signupUser from "../controllers/user/signupUser";
import loginUser from "../controllers/user/loginUser";

const router = Router();

router.post("/user/signup", signupUser);
router.post("/user/login", loginUser);

export default router;