import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import Homepage from "./pages/Homepage"
import Signup from "./pages/Signup"
import UserTask from "./pages/Usertask" 

import { loginAction } from "./pages/actions/loginAction"
import { signupAction } from "./pages/actions/signupAction"
import { createTaskAction } from './pages/actions/createTaskAction';
import { tasksLoader } from "./pages/loaders/tasksLoader"

const routes = createBrowserRouter([
  {path:"/", element: <RootLayout />, children: [
    {index: true, element: <Homepage />, action: loginAction},
    {path:"signup", element: <Signup />, action: signupAction},
    {path: "tasks/:userId", element: <UserTask />, loader: tasksLoader, action: createTaskAction}
  ]},
])

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
