import './App.css';
import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
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

  // const [filters, setFilters] = useState<{ status?: TaskStatus }>({});

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  // const filteredTasks = tasks.filter((task) => {
  //   return !filters.status || task.status === filters.status;
  // });

  const filteredTasks = tasks.filter((task) => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority)
    );
  });

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

  function handleDelete(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }
  return (
    <div>
      <h1>Lab 3</h1>
      <h2>Lists, Keys, and Conditionals</h2>

      <div className="task-list">
        <h3>Task List</h3>


        <TaskFilter onFilterChange={(newFilters) => setFilters(newFilters)} />
        <div className="tasklist-box">

          <TaskList
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />

        </div>

      </div>
    </div>
  );
}
