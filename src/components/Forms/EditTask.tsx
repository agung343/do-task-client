import { useState } from "react";
import { Form, useParams } from "react-router-dom";

export type TaskType = {
    task : {
        title: string;
        status: "PENDING" | "DONE";
    } | null
}

interface TaskProps {
    task: {
        title: string;
        status: "PENDING" | "DONE";
    } | null
}

export default function EditTask({task}: TaskProps) {
    const {userId} = useParams()
    const [status, setStatus] = useState(task?.status || "PENDING")
    const [title, setTitle] = useState("")

    function checkedHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const currStatus = e.target.checked ? "PENDING" : "DONE"
        setStatus(currStatus)
        console.log(currStatus)
    }

    function titleChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value)
    }

    async function submitHandler(e: React.FormEvent) {
        e.preventDefault()

        const taskForm = new FormData()
        taskForm.append("title", title)
        taskForm.append("status", status)

        const response = await fetch(`http://localhost:8080/task/${userId}/patch`, {
            method: "PATCH",
            body: JSON.stringify(Object.fromEntries(taskForm)),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            console.log("updating task")
        }
    }

    return(<>
        <form method="post" className="edit-form" onSubmit={submitHandler}>
            <input type="text" id="title" name="title" defaultValue={task?.title} onChange={titleChangeHandler}  />
            <div>
                <input type="checkbox" id="status" name="status" defaultChecked={status === "DONE"} onChange={checkedHandler} />
                <label htmlFor="status">Mark as DONE</label>
            </div>
            <button className="edit-task__button">Edit Task</button>
        </form>
    </>)
}
