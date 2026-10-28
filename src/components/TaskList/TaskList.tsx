import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList(props: TaskListProps) {
    return (
        <div>
            {props.tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={props.onStatusChange}
                    onDelete={props.onDelete}

                />

            ))}
        </div>

    );
}