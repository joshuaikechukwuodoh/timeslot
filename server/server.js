import env from "dotenv";
env.config();
import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import "./model/Booking.js"; // Ensure models are imported to register them with Sequelize
import bookingRoutes from "./routes/bookingRoutes.js"; // Import booking routes

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.use("/api/bookings", bookingRoutes); // Use booking routes

const startServer = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server: ", error);
  }
};

startServer();

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
