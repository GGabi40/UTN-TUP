import mongoose from "mongoose";

/* Creamos la estructura de una tarea:
title -> nombre de la tarea
completed -> si está hecha
createdAt -> La fecha de su creación
*/

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

// Creamos el modelo:
const Task = mongoose.model('Task', taskSchema);

export default Task;