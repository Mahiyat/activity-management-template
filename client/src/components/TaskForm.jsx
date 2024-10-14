import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, MenuItem } from "@mui/material";

import { API_URL_TASKS } from "../constants";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const TASK_ADD_API = API_URL_TASKS + "add";
    try {
      await axios.post(TASK_ADD_API, task);
      alert("Task created successfully");
    } catch {
      alert("Task creation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="title"
        label="Task Title"
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="description"
        label="Description"
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
      />
      <TextField
        name="category"
        label="Category"
        onChange={handleChange}
        select
        fullWidth
      >
        <MenuItem value="Class">Class</MenuItem>
        <MenuItem value="Tutorial">Tutorial</MenuItem>
        <MenuItem value="Others">Others</MenuItem>
      </TextField>
      <TextField
        name="priority"
        label="Priority"
        onChange={handleChange}
        select
        fullWidth
      >
        <MenuItem value="red">Red</MenuItem>
        <MenuItem value="orange">Orange</MenuItem>
        <MenuItem value="yellow">Yellow</MenuItem>
        <MenuItem value="green">Green</MenuItem>
        <MenuItem value="purple">Purple</MenuItem>
        <MenuItem value="blue">Blue</MenuItem>
      </TextField>
      <TextField
        name="deadline"
        label="Deadline"
        type="date"
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Create Task
      </Button>
    </form>
  );
};

export default TaskForm;
