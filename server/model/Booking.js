import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true, // Assuming phone can be optional
    },
    session_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY, // Stores only date, e.g., 'YYYY-MM-DD'
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME, // Stores only time, e.g., 'HH:MM:SS'
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME, // Stores only time, e.g., 'HH:MM:SS'
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER, // Assuming duration in minutes or hours
      allowNull: false,
    },
    // Sequelize automatically adds createdAt and updatedAt columns by default
  },
  {
    tableName: "bookings", // Ensure this matches your actual table name in PostgreSQL
    timestamps: true, // Ensures createdAt and updatedAt columns are managed by Sequelize
  }
);

export default Booking;
