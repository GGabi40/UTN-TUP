import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import TasksList from '../tasks/TasksList';
import NewTask from '../newTask/NewTask';
import Filter from '../filter/Filter';

import '../../App.css'

function Home({ user }) {
  const navigate = useNavigate(); // redirige a páginas

  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState('todas');

  const getFilteredTasks = () => {
    if (filter === "completadas") return task.filter(task => task.completed);
    if (filter === "pendientes") return task.filter(task => !task.completed);
    return task;
  };

  useEffect(() => {
    if(!user) {
      navigate("/register");
    }
  },[user, navigate]);


  useEffect(() => {
    if(!user) return; // si no hay use, no ejecuta

    axios.get(`http://localhost:3000/api/task?user=${user._id}`)
      .then((res) => setTask(res.data))
      .catch(e => console.error("Error al traer tareas: ", e));
  }, [user]);

  const addTask = (newTask) => {
    setTask(prev => [...prev, newTask]);
  };

  const updateTask = (id, completed) => {
    setTask(prev => prev.map(task => task._id === id ? {...task, completed} : task));
  };

  const deleteTask = (id) => {
    setTask(prev => prev.filter(task => task._id !== id));
  };

  const handleEdit = (id, newTitle) => {
    setTask(prevTasks => prevTasks.map(task => task._id === id ? {...task, title: newTitle} : task));
  };

  if (!user) return null; // evita renderizar si el user no está cargado

  return (
    <div>
      <h1>ToDo List</h1>

      <NewTask onTaskCreated={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TasksList 
        tasks={getFilteredTasks()} 
        onTaskUpdate={updateTask} 
        onTaskDelete={deleteTask} 
        onEdit={handleEdit} 
      />
    </div>
  );
}

export default Home;
