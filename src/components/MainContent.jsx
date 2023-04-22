import React, { useState } from 'react'
import '../App.css'
import addButton from '../assets/AddButton.png'
import ModalAdd from './ModalAdd';
import Check from './Check';

export default function MainContent() {
  const arrayOfTodos = [
    {
      id: 1,
      title: 'Yoga',
      completed: false,
      deleted: false
    },
    {
      id: 2,
      title: 'Gym',
      completed: false,
      deleted: false
    }
  ]

  const [currentTab, setCurrentTab] = useState("Todo");
  const [todos, setTodos] = useState([...arrayOfTodos]);
  const [modalActive, setModalActive] = useState(false);
  const [inputValue, setInputValue] = useState('')
  
  

  const handleChange = (tab) => {
    setCurrentTab(prev => tab)
  }

  const handleShowModal = () => {
    setModalActive(prev => !prev)
  }

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddTodo = () => {
    const todo = {
      id: todos.length+1,
      title: inputValue,
      completed: false,
      deleted: false
    }
    setTodos(prev => [...prev, todo])
    setInputValue("");
  }

  const handleCompleteToDo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteToDo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, deleted: true } : todo
      )
    );
  };

  const handleMoveBack = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, deleted: false, completed: false } : todo
      )
    );
  };

  const handleDeleteForever = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  


  const tabs = [
    {
      id:1,
      name: "Todo",
    },
    {
      id:2, 
      name: "Done",
    }, 
    {
      id:3, 
      name: "Trash",
    }
  ]

  const activeTodos = todos.filter((todo) => !todo.completed && !todo.deleted);
  const completedTodos = todos.filter((todo) => todo.completed && !todo.deleted);
  const deletedTodos = todos.filter((todo) => todo.deleted);


  return (
    <div>
      <div className='tabs-plus'>
        <div className='tabs'>
          {tabs.map(tab => (
            <button key={tab.id} className={`tab ${currentTab === tab.name && 'active'}`} onClick={() => handleChange(tab.name)}>
              {tab.name}
            </button>
          ))}
        </div>
        <div style={{position:'relative', display: 'flex'}}>
          {modalActive && 
            <ModalAdd 
              inputValue={inputValue} 
              handleInputChange={handleInputChange}
              handleAddTodo={handleAddTodo} /
            >}
          <button className='add-button' onClick={handleShowModal} >
            <img src={addButton} /> 
          </button>
        </div>
      </div>


      {currentTab === 'Todo' && 
      <div>
        <h2 className='title'>To Do</h2> 
        <div>
          {activeTodos.map((todo) => (
            <Check 
              key={todo.id} 
              todo={todo} 
              currentTab={currentTab}
              handleCompleteToDo={handleCompleteToDo}
              handleDeleteToDo={handleDeleteToDo}
            />
            ))}
        </div>  
      </div>
      }
      {currentTab === 'Done' && 
        <div>
          <h2 className='title'>Done</h2> 
          <div>
            {completedTodos.map((todo) => (
              <Check 
                key={todo.id} 
                todo={todo} 
                currentTab={currentTab}
                handleCompleteToDo={handleCompleteToDo}
                handleDeleteToDo={handleDeleteToDo}
              />
              ))}
          </div>  
        </div>
      }
      {currentTab === 'Trash' && 
        <div>
          <h2 className='title'>Trash</h2> 
          <div>
            {deletedTodos.map((todo) => (
              <Check 
                key={todo.id} 
                todo={todo} 
                currentTab={currentTab}
                handleCompleteToDo={handleCompleteToDo}
                handleDeleteToDo={handleDeleteToDo}
                handleDeleteForever={handleDeleteForever}
                handleMoveBack={handleMoveBack}
              />
            ))}
          </div>  
        </div>
      }

      
    </div>
  )
}
