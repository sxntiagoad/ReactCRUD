import React, { useState } from 'react'
import { useEffect } from "react";
import { getAllTask } from "../api/task.api";
import { TaskCard } from "./TaskCard";
export function TasksList() {
    const [tasks, setTasks] = useState([]);
  
    useEffect(() => {
      async function loadTasks() {
        const res = await getAllTasks();
        setTasks(res.data);
      }
      loadTasks();
    }, []);
  
    return (
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    );
  }