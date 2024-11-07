import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodosDisplay from './components/TodosDisplay'
import './app.css'
export const userContext = createContext()

export default function App() {  
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState({name:"", done:false})

  function persistData(data){
    localStorage.setItem('todos', JSON.stringify({ todos: data }))
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }

    let tasks = localStorage.getItem('todos')
    if(!tasks){
      return
    }

    tasks = JSON.parse(tasks).todos
    setTodos(tasks)
  },[])
  return (
    <div className="App">
      <userContext.Provider value={{persistData, todoValue, setTodoValue, todos, setTodos}}>
        <Header/>
        <Form/>
        <TodosDisplay/>
      </userContext.Provider>
    </div>
  )
}