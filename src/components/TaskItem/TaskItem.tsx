import type { TaskItemProps } from "../../types";


export default function TaskItem(props: TaskItemProps) {
    return (
        <div>
            <h2>Task {props.task.id}</h2>
            <p>Title: {props.task.title}</p>
            <p>Description: {props.task.description}</p>
            <p>Status: {props.task.status}</p>
            <p>priority: {props.task.priority}</p>
            <p>Due: {props.task.dueDate}</p>
        </div>

    );


}