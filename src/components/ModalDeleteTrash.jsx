import React from 'react'
import '../App.css'
import trashIcon from '../assets/trash-icon.png'
import moveBackIcon from '../assets/moveback-icon.png'

export default function ModalDeleteTrash({todo, handleDeleteForever, handleMoveBack}) {
  return (
    <div className='modal-delete-trash'>
      <div className='modal-delete-trash-content'>
        <div className='options'>
          <button className='trash-button' onClick={()=> handleDeleteForever(todo.id)}>
            <img style={{height:14, width:14}} src={trashIcon} />
          </button>
          <p>Delete Forever</p>
        </div>

        <div className='options'>
          <button className='trash-button' onClick={() => handleMoveBack(todo.id)} >
            <img style={{height:14, width:14}} src={moveBackIcon} />
          </button>
          <p>Move Back To To Do</p>
        </div>
        
        
      </div>
    </div>
  )
}
