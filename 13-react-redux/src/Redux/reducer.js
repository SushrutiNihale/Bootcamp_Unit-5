import { ADD_TODO, TOGGLE_TODO } from './actions';
import { nanoid } from 'nanoid';

const initState = {
    todos: []
};

export const reducer = (store = initState, action) => {
    if (action.type === ADD_TODO) {
        return {
            ...store,
            todos: [
                ...store.todos,
                { title: action.payload, status: false, id: nanoid() }
            ]
        }
    }
    if (action.type === TOGGLE_TODO) {
        const id = action.payload;
        const updatedStatus = !store.todos.find(e => e.id === id).status;
        return ({
            ...store,
            todos: [
                ...store.todos,
                store.todos.find(e => e.id === id).status = updatedStatus
            ]
        })

        // below code is wrong since store is immutable!!
        // if (store.todos.find(e => e.id === id).status) {
        //     store.todos.find(e => e.id === id).status = false;
        // } else {
        //     store.todos.find(e => e.id === id).status = true;
        // }
        // return store;
    }
    return store;
};