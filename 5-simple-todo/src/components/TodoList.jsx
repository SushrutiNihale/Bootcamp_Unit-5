import { TodoItem } from "./TodoItem"

const ToDoList = (props) => {
    return (
        <div>
            {props.data.map((e) => {
                return <TodoItem data={e} toggle={props.toggle} />
            })}
        </div>
    )
}

export { ToDoList }