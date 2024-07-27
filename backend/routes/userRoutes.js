import express from "express";
import {
    Register,
    Login,
    UpdateProfile,
    Logout,
} from "../controller/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.put("/profile/update", isAuthenticated, UpdateProfile);
router.get("/logout", Logout);

export default router;
