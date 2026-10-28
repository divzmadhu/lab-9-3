import './App.css';
import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import type { Task, TaskStatus } from "./types";

export default function App() {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Project Kickoff",
      description: "Project Manager: Conduct initial kickoff meeting with stakeholders and the assigned team to align on project objectives, scope, and deliverables.",
      status: "pending",
      priority: "high",
      dueDate: "2026-11-02"
    }
  ]);

  // Function to update the task status
  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );
  }
  return (
    <div>
      <h1>Lab 3</h1>
      <h2>Lists, Keys, and Conditionals</h2>
      <h3>TaskList</h3>
      <div className="tasklist-box">

        <TaskList
          tasks={tasks}
          onStatusChange={handleStatusChange}
          onDelete={() => { }}
        />

      </div>

    </div>
  );
}
