import React from 'react'
import '../App.css'
import trashIcon from '../assets/trash-icon.png'

export default function ModalDelete({todo, selectedItem, handleDeleteToDo}) {
  return (
    <div className='modal-delete'>
      <div className='modal-delete-content'>
        <button className='trash-button' onClick={() => handleDeleteToDo(todo.id)}>
          <img style={{height:14}} src={trashIcon} />
        </button>
        <p>Move to Trash</p>
      </div>
    </div>
  )
}
