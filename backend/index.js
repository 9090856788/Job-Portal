import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbConnection from "./database/dbConnection.js";

// Router
import userRoutes from "./routes/userRoutes.js";

dotenv.config({});

const PORT = process.env.PORT || 3000;

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
  origin: `${process.env.FRONTEND_ORIGIN}`,
  Credentials: true,
};
app.use(cors(corsOption));

// dbConnection
dbConnection();

// routes
app.use("/api/auth/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on the PORT ${PORT}: )`);
});
