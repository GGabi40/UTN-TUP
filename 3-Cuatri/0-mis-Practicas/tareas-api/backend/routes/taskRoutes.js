import express from "express";
import { 
    getTask,
    createTask,
    updateTask,
    deleteTask
 } from "../controllers/taskController.js";

/*  Agarra lo que viene de controladores y hace:
GET -->	/api/tasks -->	Obtener todas las tareas
POST -->	/api/tasks -->	Crear una nueva tarea
PUT -->	/api/tasks/:id -->	Actualizar una tarea
DELETE -->	/api/tasks/:id -->	Eliminar una tarea
*/

const router = express.Router();

router.get("/", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
