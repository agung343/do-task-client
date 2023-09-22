import { Form } from "react-router-dom";

export default function NewTask() {
    return(<>
        <Form method="post" className="new-form">
            <input type="text" id="title" name="title" placeholder="task title" />
            <button className="new-task__button">add task</button>
        </Form>
    </>)
}

