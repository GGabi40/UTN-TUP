// CONEXIÓN MODULAR
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado a mongoDB');
    } catch(e) {
        console.error("❌ Error al conectar a MongoDB:", error.message);
        process.exit(1); // Termina el proceso si no se puede conectar
    }
};

export default connectDB;