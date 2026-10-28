import './App.css';
import TaskList from "./components/TaskList/TaskList";

export default function App() {

  const task = { 
    id: "1", 
    title: "Project Kickoff", 
    description: "Project Manager: Conduct initial kickoff meeting with stakeholders and the assigned team to align on project objectives, scope, and deliverables.", 
    status: "pending", 
    priority: "high", 
    dueDate: "2026-11-02" 
  };
  return (
    <div>
      <h1>Lab 3</h1>
      <h2>Lists, Keys, and Conditionals</h2>
      <h3>TaskList</h3>
      <div className="tasklist-box">

        <TaskList
          tasks = {[task]}
          onStatusChange={() => {}}
          onDelete={() => {}}
        />
        
      </div>

    </div>
  );
}
