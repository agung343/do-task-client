import { useState, useEffect} from "react";
import { useParams, useLoaderData, } from "react-router-dom";
import { Modal } from "@mui/material";
import NewTask from "../components/Forms/NewTask";
import EditTask from "../components/Forms/EditTask";
import TaskList from "../components/TaskList";
import type { Tasks, TaskItem } from "../components/TaskList";

import "../styles/Usertask.css"

export default function UserTask() {
    const [openModal, setOpenModal] = useState(false)
    const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null)
    const [user, setUser] = useState("")

    const {userId} = useParams()
    const {tasks} = useLoaderData() as Tasks

    useEffect(() => {
        async function getUserName() {
            const URL = import.meta.env.VITE_URL_TASK + userId
            console.log(URL)
            const response = await fetch(URL)

            const resData = await response.json()
            setUser(resData.user)
        }
        getUserName()
    }, [userId])

    function editTaskHandler(task: TaskItem) {
        setSelectedTask(task)
        setOpenModal(true)
    }

    function closeModalHandler() {
        setOpenModal(false)
    }

    async function deleteTask() {
        try {
            const token = localStorage.getItem("token")
            const response = await fetch(`http://localhost:8080/task/${userId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            if (!response.ok) {
                console.log("could not delete now!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(<>
    <div className="app-task">
        <h1 className="task-header">Hi {user}, Start Manage Your Task</h1>
        <NewTask />
        <div className="task">    
            <TaskList tasks={tasks} onClick={editTaskHandler} onDelete={() => deleteTask} />
        </div>
        <Modal open={openModal} onClose={closeModalHandler}>
            <div className="modal">
                <EditTask task={selectedTask} />
            </div>
        </Modal>
    </div>
    </>)
}