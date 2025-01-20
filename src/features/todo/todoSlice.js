import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'hello World', completed: false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                    if(todo.id === action.payload.id){
                        return {...todo, text: action.payload.text, completed: todo.text===action.payload.text ? todo.completed : false}
                    }
                    return todo;
                }
            );
        },
        toggleCompletedStatus: (state, action) => {
            state.todos = state.todos.map(todo => (todo.id === action.payload
                ?  {...todo, completed: !todo.completed}  // Updating the text
                : todo)
            );
        }
          
    }
})

export const {addTodo, removeTodo, updateTodo, toggleCompletedStatus} = todoSlice.actions
export default todoSlice.reducer