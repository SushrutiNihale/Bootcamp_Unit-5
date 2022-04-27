import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Todo = () => {
    const id = useParams().id;
    const todo = useSelector((store) => {
        return store.todos.find(e => e.id === id);
    });

    return (
        <div>
            To-Do: {todo.title}
            <br></br>
            Status: {todo.status ? "Completed" : "Not Completed"}
        </div>
    )
}