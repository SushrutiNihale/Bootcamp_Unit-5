import { ADD_TODO } from './actions';
import { nanoid } from 'nanoid';

export const reducer = (store, action) => {
    if (action.type === ADD_TODO) {
        return {
            ...store,
            todos: [
                ...store.todos,
                { title: action.payload, status: false, id: nanoid() }
            ]
        }
    }
    return store;
};