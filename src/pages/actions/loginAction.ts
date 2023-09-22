import { json, redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";

export const loginAction = async({request}: ActionFunctionArgs) => {
    const formData = await request.formData()
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const authData = {
        email: email,
        password: password
    }

    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(authData),
        headers: {
            "Content-Type": 'application/json'
        }
    })

    if (response.status === 422 || response.status === 401) {
        const errorRes = await response.json()
        return errorRes;
    }

    if (!response.ok) {
        throw json(
            {message: "Could not login"},
            {status:500}
        )
    }

    const responseData = await response.json()
    const userId = responseData.userId
    const token = responseData.token
    localStorage.setItem("token", token)
    const expiredToken = new Date()
    expiredToken.setHours(expiredToken.getHours() + 4)
    localStorage.setItem("expired", expiredToken.toISOString())

    return redirect(`/tasks/${userId}`)
}