import express from 'express';
import * as taskController from '../controllers/taskController.js';

const taskRoutes = express.Router();

// Route to create a task
taskRoutes.post('/add', taskController.createTask);

// Route to update a task
taskRoutes.put('/update/:id', taskController.updateTask);

// Route to get all tasks
taskRoutes.get('/', taskController.getAllTasks);

// Route to delete a task
taskRoutes.delete('/delete/:id', taskController.deleteTask);

export default taskRoutes;
