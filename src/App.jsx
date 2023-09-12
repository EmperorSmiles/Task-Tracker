import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import './App.css'

function App() {
  const [ showAddTask, setShowAddTask ] = useState(false)
  const [ tasks, setTasks ] = useState([
    {
        id: 1,
        text: 'Get to Work',
        day: 'Sept 11th at 5:30am',
        reminder: true
    },
    {
        id: 2,
        text: 'Build your project',
        day: 'Sept 11th at 9:00pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Play Bass',
        day: 'Sept 12th at 11:00pm',
        reminder: false
    },
  ])
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <>
      <div className='container'>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'No Tasks To Show'
        )}
        </div>
    </>
  )
}

export default App
