import type { TaskListProps } from "../../types";

export default function TaskList(props: TaskListProps) {
    return (
        <div>
            {props.tasks.map((task) => (
                <h2 key={task.id}>{task.title}</h2>
            ))}
        </div>

    );
}