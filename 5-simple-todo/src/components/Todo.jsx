import { useState } from "react"
import { ToDoList } from "./TodoList"
import {nanoid} from "nanoid";

const Todo = () => {
    const [TodoData, setTodoData] = useState([]);
    const getData = (id) => {
        const data = document.getElementById(id).value;
        setTodoData([...TodoData,
            {
                title: data,
                status: "Not dine",
                id: nanoid(5)
            }
        ]);
    }
    const toggle = (id) => {
        setTodoData([
            ...TodoData.map((e) => (e.id === id ? {...e, status: "Done"} : e))
        ])
    }

    return (
        <>
            <input id="user-input" type="text" placeholder="Enter note here"></input>
            <button onClick={() => {getData("user-input")}}>Add</button>
            <ToDoList data={TodoData} toggle={toggle}/>
        </>
    )
}

export { Todo }