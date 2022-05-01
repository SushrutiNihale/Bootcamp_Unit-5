import { CHECK_USER_STATUS, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actions";
import { nanoid } from 'nanoid';

const initState = {
    isLoggedIn: false,
    todos: []
};
export const reducer = (store = initState, action) => {
    switch (action.type) {
        case CHECK_USER_STATUS:
            if (action.payload !== null) {
                // if authToken exists in local storage
                return {
                    ...store,
                    isLoggedIn: true
                }
            }
            return store;
        case ADD_TODO:
            return {
                ...store,
                todos: [
                    ...store.todos,
                    { title: action.payload, status: false, id: nanoid() }
                ]
            };
        case TOGGLE_TODO:
            const id = action.payload;
            return ({
                ...store,
                todos: [
                    ...store.todos.map((e) => {
                        if (e.id === id) {
                            e.status = !e.status;
                            return e;
                        }
                        return e;
                    })
                ]
            });
        case DELETE_TODO:
            return ({
                ...store,
                todos: [
                    ...store.todos.filter(e => e.id !== action.payload)
                ]
            })
        default:
            return store;
    }
}