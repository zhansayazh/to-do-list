import { useState } from 'react';
import React from 'react'
import '../App.css'
import moreIcon from '../assets/more-icon.png'
import ModalDelete from './ModalDelete';
import ModalDeleteTrash from './ModalDeleteTrash';

export default function Check({currentTab, todo, handleCompleteToDo, handleDeleteToDo, handleDeleteForever, handleMoveBack}) {

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalDeleteActive, setModalDeleteActive] = useState(false);

  
  const handleShowModalDelete = (index) => {
    setSelectedItem(index);
    setModalDeleteActive(prev => !prev)
  }
  

  return (
    <div className='todo-list'>
      <div>
        <button className='more-button' onClick={() => handleShowModalDelete(todo.id)}>
          <img className='more-icon' src={moreIcon}  />
        </button>
        {modalDeleteActive && (currentTab === 'Todo' || currentTab === 'Done') && <ModalDelete todo={todo} handleDeleteToDo={handleDeleteToDo} />}
        {modalDeleteActive && (currentTab === 'Trash') && <ModalDeleteTrash todo={todo} handleDeleteForever={handleDeleteForever} handleMoveBack={handleMoveBack}/>}
      </div>
      <input 
        style={{marginRight:10, width:16, height:16}}
        type="checkbox" 
        value={todo.title} 
        checked={todo.completed}
        onChange={() => handleCompleteToDo(todo.id)}
      />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none", opacity: todo.completed && '0.5' }}>{todo.title}</span>
    </div>
  )
}
