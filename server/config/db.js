import { Sequelize } from "sequelize";
import env from "dotenv";
env.config();
// Log environment variables for debugging
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "********" : "NOT SET");
console.log("DB_HOST:", process.env.DB_HOST || "localhost");
console.log("DB_PORT:", process.env.DB_PORT || 5432);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    logging: false, // Disable logging for cleaner output
    port: 5432, // Default PostgreSQL port
    // dialectOptions: {
    //   ssl: {
    //     require: false, // Set to true if you need SSL
    //     rejectUnauthorized: false, // Set to true if you want to reject self-signed certificates
    //   },
    // },
  }
);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

console.log("Connecting to the database...");
connectToDatabase();

export default sequelize;
