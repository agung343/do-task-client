import { json, redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom"

export const signupAction = async ({request}:ActionFunctionArgs) => {
    const formData = await request.formData()
    const signupData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password")
    }

    const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        body: JSON.stringify(signupData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (response.status === 422 || response.status === 400) {
        const errorRes = await response.json()
        return errorRes
    }

    if (!response.ok) {
        throw json(
            {message: "An Error Occured"},
            {status: 500}
        )
    }

    return redirect("/")
}