import { Router } from "express";
import { createBooking } from "../controllers/bookingController.js"; // Assuming the controller is here

const router = Router();

router.post("/", createBooking);

export default router;
