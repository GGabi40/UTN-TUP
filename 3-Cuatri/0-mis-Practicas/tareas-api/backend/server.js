import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

import connectDB from "./config/db.js";

// routes
import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js';

// middleware
import logger from "./middleware/logger.js";


dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

// --- middlewares

// para utilizar JSON:
app.use(express.json());
// personalizado:
app.use(logger);

// route para hacer GET, POST, PUT, DELETE
app.use("/api/task", taskRoutes);
app.use("/api/user", userRoutes);

// establecer conexión con BBDD
connectDB().then(() => {
    app.listen(3000, () => {
      console.log("Servidor corriendo en http://localhost:3000");
    });
});