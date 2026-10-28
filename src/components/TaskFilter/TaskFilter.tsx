import type { TaskFilterProps, TaskStatus } from "../../types";

export default function TaskFilter(props: TaskFilterProps) {
    return (
           
            <div className="task-filter">
                 <h3>Filter Tasks</h3>


                <div className="filter-controls">
                    <div>
                        <label htmlFor="status-filter">Filter by Status:</label>
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

                    <div>
                        <label htmlFor="priority-filter">Filter by Priority: </label>
                        <select
                            id="priority-filter"
                            onChange={(event) => {
                                const priority = event.target.value as
                                    "low" | "medium" | "high";

                                if (priority === "") {
                                    props.onFilterChange({});
                                } else {
                                    props.onFilterChange({ priority });
                                }
                            }}
                        >
                            <option value="">All Priorities</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>
            </div >
    );
}
