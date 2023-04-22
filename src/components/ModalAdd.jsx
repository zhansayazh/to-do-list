import React from 'react'
import '../App.css'

export default function ModalAdd({inputValue, handleInputChange, handleAddTodo}) {
  return (
    <div className='modal'>
      <div className='modal-content'> 
        Add New To Do
        <input type='text' className='input-todo' onChange={handleInputChange} value={inputValue}  placeholder='Your text'/>
        <button className='add-todo-button' onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  )
}
