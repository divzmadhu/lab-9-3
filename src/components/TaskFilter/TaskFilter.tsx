import type { TaskFilterProps, TaskStatus } from "../../types";

export default function TaskFilter(props: TaskFilterProps) {
    return (<div className="task-filter"> <h3>Filter Tasks</h3>


        <div>
            <label htmlFor="status-filter">Filter by Status: </label>
            <select
                id="status-filter"
                onChange={(event) => {
                    const status = event.target.value as TaskStatus;
                    props.onFilterChange({ status });
                }}
            >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    </div>


    );
}
