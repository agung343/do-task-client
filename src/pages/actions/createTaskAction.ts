import { json, redirect } from "react-router-dom"
import type { ActionFunctionArgs } from "react-router-dom"

export const createTaskAction = async ({request, params} : ActionFunctionArgs) => {
    const userId = params.userId as string
    const token = localStorage.getItem("token")
    
    const formData = await request.formData()
    const taskData = {
        title: formData.get("title")
    }

    const URL = "http://localhost:8080/task";
    const response = await fetch(`${URL}/${userId}/new`, {
        method: "POST",
        body: JSON.stringify(taskData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    })

    if (response.status === 422) {
        const error = await response.json()
        console.log(error)
        return error
    }

    if (!response.ok) {
        throw json(
            {message: "An Error Occured, at client-side"},
            {status: 500}
        )
    }
    return redirect(`/tasks/${userId}`);
}