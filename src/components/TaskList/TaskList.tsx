import type { TaskListProps } from "../../types";

export default function TaskList(props: TaskListProps) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.priority}</p>
            <p>{props.dueDate}</p>
        </div>

    );
}