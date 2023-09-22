import { Tooltip } from "@mui/material"
import { DeleteForever } from "@mui/icons-material"
import EditIcon from '@mui/icons-material/Edit';

export type TaskItem = {
    _id: string;
    title: string
    status: "PENDING" | "DONE";
}

export type Tasks = {
    tasks: TaskItem[]
}

interface Props {
    tasks: TaskItem[]
    onClick: (task: TaskItem) => void
    onDelete: () => void
}

export default function TaskList({tasks, onClick, onDelete}: Props) {
    return(<>
        {tasks.length > 0 ? (<>
            {tasks.map(task => (<>
            <ul className="task-list">
                <li className="task-item" key={task._id}>
                    <div id="task-body">
                        <h2 className="task-body__title">{task.title}</h2>
                        <p className="task-body__status">{task.status}</p>
                    </div>
                    <div id="task-actions">
                       <Tooltip title="delete">
                            <button className="delete-button" onClick={onDelete}>
                                <DeleteForever />
                            </button>
                       </Tooltip>
                       <Tooltip title="edit">
                            <button className="edit-button" onClick={() => onClick(task)}>
                                <EditIcon />
                            </button>
                       </Tooltip>
                    </div>
                </li>
            </ul>
        </>))}
        </>) : <h2>No Task Yet, start the new one</h2>}
        
    </>)
}