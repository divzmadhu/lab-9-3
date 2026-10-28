import type { TaskItemProps } from "../../types";


export default function TaskItem(props: TaskItemProps) {
    return (

        <div className="task-item">
            <div className="task-header">
                <p>Task {props.task.id}</p>


                <div className="task-status">
                    <label htmlFor={`task-status-${props.task.id}`}>Status:</label>
                    <select
                        id={`task-status-${props.task.id}`}
                        value={props.task.status}
                        onChange={(event) =>
                            props.onStatusChange(
                                props.task.id,
                                event.target.value as "pending" | "in-progress" | "completed"
                            )
                        }
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>

            <h2>{props.task.title}</h2>
            <p>Description: {props.task.description}</p>
            <div className="task-details">
                <p>Priority: {props.task.priority}</p>
                <p>Due : {props.task.dueDate}</p>
            </div>


        </div>
    );
}