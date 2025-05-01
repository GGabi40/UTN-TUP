import Task from '../models/taskModel.js';

/* Acá hacemos el CRUD */

// obtener todas las tareas:
export const getTask = async (req, res) => {
    const { user } = req.query;
    
    try {
        const task = await Task.find({ user });
        res.status(200).json(task);
    } catch (e) {
        res.status(500).json({ message: "Error al obtener tareas." });
    }
};

// Crear nuevas tareas:
export const createTask = async (req, res) => {
    const { title, completed, user } = req.body;

    try {
        const newTask = new Task({ title, completed, user });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (e) {
        res.status(500).json({ message: "Error al crear la tarea." });
    }
};


// Actualizar Tarea
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, completed },
            { new: true }
        );

        if (!updatedTask) {
            res.status(404).json({ message: "Tarea no encontrada." });
        }

        res.status(200).json(updatedTask);
    } catch (e) {
        res.status(500).json({ message: "Error al actualizar la tarea." });
    }
};


// Eliminar una tarea
export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);

        if(!deletedTask) {
            res.status(404).json({ message: "Tarea no encontrada." });
        }

        res.status(200).json(deletedTask);

    } catch (e) {
        res.status(500).json({ message: "Error al eliminar la tarea." });
    }
};

