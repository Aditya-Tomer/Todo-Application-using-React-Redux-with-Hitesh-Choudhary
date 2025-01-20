import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

function AddTodos({isEditing, editingTodoId, setEditingTodoId, setIsEditing}) {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    const inputRef = useRef(null)
    
    const todos = useSelector((state) => state.todos);
    
    useEffect(() => {
        // When editing a todo, fill the input field with its text
        if (isEditing) {
            const todoToEdit = todos.find(todo => todo.id === editingTodoId);
            if (todoToEdit) {
                setInput(todoToEdit.text);
                inputRef.current.focus();
                //dispatch(updateTodo({ id: editingTodoId, text: input, completed: true }));//todoToEdit = {...todoToEdit, text: ''};
            }
        }
    }, [isEditing,todos]);

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (isEditing) {
          const todoToEdit = todos.find(todo => todo.id === editingTodoId);
          dispatch(updateTodo({ id: editingTodoId, text: input}))
          setIsEditing(false); // Reset editing state
          setEditingTodoId(null); // Clear editing todo ID
        } else {
            dispatch(addTodo(input));
        }
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {isEditing ? "Update" : "Add Todo"}
          </button>
        </form>
    )
}

export default AddTodos;
