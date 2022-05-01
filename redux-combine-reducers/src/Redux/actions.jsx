export const CHECK_USER_STATUS = "CHECK_USER_STATUS";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const checkUserStatus = (data) => {
    return {
        type: CHECK_USER_STATUS,
        payload: data
    }
}

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
};

export const toggleTodo = (data) => {
    return {
        type: TOGGLE_TODO,
        payload: data
    }
};

export const deleteTodo = (data) => {
    return {
        type: DELETE_TODO,
        payload: data
    }
};