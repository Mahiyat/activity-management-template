import Task from '../models/Task.js';

// Create a new task
export const createTask = async (taskData) => {
  const newTask = new Task(taskData);
  return await newTask.save();
};

// Update an existing task
export const updateTask = async (taskId, taskData) => {
  return await Task.findByIdAndUpdate(taskId, taskData, { new: true });
};

// Get all tasks
export const getAllTasks = async () => {
  return await Task.find();
};

// Get a task by ID
export const getTaskById = async (taskId) => {
  return await Task.findById(taskId);
};

// Delete a task
export const deleteTask = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};
