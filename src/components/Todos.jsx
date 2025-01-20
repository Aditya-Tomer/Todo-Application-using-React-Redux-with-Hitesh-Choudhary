import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleCompletedStatus } from '../features/todo/todoSlice'

function Todos({isEditing, setEditingTodoId,setIsEditing}) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  const handleEdit = (todo) => {
    setIsEditing(true)
    setEditingTodoId(todo.id); // Set the todo to be edited
  }

  const toggleCompleted = (id) => {
    dispatch(toggleCompletedStatus(id));
  }


  return (
    <>
      <div>
        <h1>List of Todos</h1>
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <div className='justify-between items-center bg-zinc-100 rounded'>
              <button
                onClick={() => handleEdit(todo)} // Trigger edit when clicked
                className={`text-white bg-blue-500 border-0 mx-1 my-1 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md`}
                //disabled={isEditing}
              >
                {isEditing ? "Can't Edit" : "Edit"}
              </button>

              <button
                onClick={() => toggleCompleted(todo.id)}
                className="text-white bg-blue-500 border-0 mx-1 my-1 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                {todo.completed ? " ✅ " : "Mark as Done"}
              </button>


              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 mx-1 my-1 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Remove
              </button>
              </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
