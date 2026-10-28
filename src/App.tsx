import './App.css';
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div>
      <h1>Lab 3</h1>
      <h2>Lists, Keys, and Conditionals</h2>
      <h3>TaskList</h3>
      <div className="tasklist-box">

        <TaskList

          id="T101"
          title="Data Entry"
          description="Input raw information, metrics, or records into a database or central spreadsheet."
          status="In Progress"
          priority="low"
          dueDate="2026-11-15"

        />
      </div>

    </div>
  );
}
