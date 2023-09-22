import { json } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom"

export const tasksLoader = async ({params}:LoaderFunctionArgs) => {
    const userId = params.userId as string
    const URL = "http://localhost:8080/task/";

    const response = await fetch(URL + userId)
    
    if (response.status === 422 || response.status === 401) {
        const error = await response.json()
        return error
    }

    if (!response.ok) {
        throw json(
            {message: "An Error Occured"},
            {status: 500}
        )
    }

    const resData = await response.json()
    
    return resData
}