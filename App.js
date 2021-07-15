import { useState, useRef, useEffect } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import EditModal from './EditModal'
import React from 'react';
// doing the mobile version
const LOCALSTORAGE_KEY = "todoApp.todos";
// {id:1, name: 'Todo 1', complete: false}

// useEffect(() => {
//   const storedTodos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
//   if (storedTodos) setTodos(storedTodos)
// }, [])

// useEffect(() => {
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos))
// }, [todos])




function App() {
  const [todos, setTodos] = useState([{
    name: "Clean the Dishes",
    date: new Date(),
    category: "Kitchen",
    color: "#8000FF",
    id: uuidv4()
  }])
  const modal = useRef()
  function handleDelete(todoID){
    setTodos(todos.filter(todo => todoID !== todo.id))
  }
  function triggerAddTodo(){
    modal.current.classList.remove('fade-out')
    modal.current.classList.add('fade-in')
    modal.current.style.display = "flex"
    modal.current.style.visibility = "visible";
  }
  function hideModal(){
    modal.current.classList.remove('fade-in');
      
    modal.current.style.visibility = "hidden";
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (data) setTodos(data);
  },[])
  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
  },[todos])
  // useEffect(() => {
  //   console.log('rendered')
  //   console.log(todos)
  // }, [todos])
  window.onclick = function(event) {
    if (event.target === modal.current) {
      modal.current.classList.remove('fade-in')
      
      modal.current.style.visibility = "hidden";
    }
  } 
  function handleAddTodo(name, date, category, color){
    setTodos(prevTodos => [...prevTodos, {
      name:name,
      date: new Date(date),
      category:category,
      color:color,
      id: uuidv4()
    }])
  }
  function handleEdit(todoID, newName, newDate, newCategory, newColor){
    const newTodos = todos;
    const getTodo = newTodos.filter(todo => todoID === todo.id);
    getTodo.name = newName;
    getTodo.date = newDate;
    getTodo.category = newCategory;
    getTodo.color = newColor;
    
    setTodos(newTodos)
  }
  function triggerEditTodo(id){
    modal.current.classList.remove('fade-out')
    modal.current.classList.add('fade-in')
    modal.current.style.display = "flex"
    modal.current.style.visibility = "visible";
  }
  return (
    
    <div className="App">
      <h1 className="main__title">Todo App</h1>
      <main className="main__container">
        <h2 className="main__welcome">Welcome to Todo App.</h2>
        <div className="todos_container">
          {/* <Todo name="Clean" date="3/04/2021" category="Kitchen" color="#fff" id={uuidv4()}/> */}
          {todos.map(todo => 
          <Todo 
            key={todo.id} 
            name={todo.name} 
            date={new Date(todo.date).toLocaleDateString()} 
            category={todo.category} 
            color={todo.color} 
            id={todo.id} 
            handleDelete={handleDelete}
            triggerEditTodo={triggerEditTodo}
          />
          )}
          <AddTodo triggerAddTodo={triggerAddTodo}/>
        </div>
      </main>
      <div className="modal-bg" ref={modal}>
        <Modal hideModal={hideModal} handleAddTodo={handleAddTodo} />
      </div>
    </div>
      
    
  );
}
 
export default App;
