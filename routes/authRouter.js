import { Router } from "express";
const router = Router();
import { register, login } from "../controllers/authController.js";
import { validateRegisterInput, validateLoginInput } from "../middleware/validationMiddleware.js";

router.route("/register").post(validateRegisterInput, register);
router.route("/login").post(validateLoginInput, login);

export default router;