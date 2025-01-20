import React, { useState } from 'react'
import Todos from './Todos'
import AddTodos from './AddTodo'

function TodoApp() {
    const [isEditing, setIsEditing] = useState(false)
    const [editingTodoId, setEditingTodoId] = useState(null)

  return (
    <>
        <AddTodos
            isEditing={isEditing}
            editingTodoId={editingTodoId}
            setIsEditing={setIsEditing}
            setEditingTodoId={setEditingTodoId}
        />
        <Todos
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setEditingTodoId={setEditingTodoId}
        />
    </>
  )
}

export default TodoApp