import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import dbConnection from "./database/dbConnection.js";

dotenv.config({});

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOption = {
    origin: `http://localhost:5173`,
    Credentials: true
}
app.use(cors(corsOption));

// dbConnection
dbConnection();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on the PORT ${PORT}`);
})
