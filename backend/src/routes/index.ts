import { Router } from "express";
import signupUser from "../controllers/user/signupUser";
import loginUser from "../controllers/user/loginUser";
import addToCart from "../controllers/cart/addToCart";
import verifyJWT from "../middleware/verifyJWT";
import handleRefreshToken from "../controllers/handleRefreshToken";
import getUserCart from "../controllers/cart/getUserCart";

const router = Router();

router.post("/user/signup", signupUser);
router.post("/user/login", loginUser);
router.post("/user/token-refresh", handleRefreshToken);
router.post("/cart/add", verifyJWT, addToCart);
router.get("/cart", verifyJWT, getUserCart);

export default router;