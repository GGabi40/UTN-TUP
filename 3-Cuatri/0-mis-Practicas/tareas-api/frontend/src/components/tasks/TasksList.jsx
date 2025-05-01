import React from 'react'
import Task from './task'

const Tasks = ({ tasks, onTaskUpdate, onTaskDelete, onEdit }) => {

  return (
    <div>
        {
            tasks.length ? (
                <ul className='task-list'>
                    {
                        tasks.map((task, index) => (
                            <Task 
                                key={index}
                                id={task._id} 
                                title={task.title} 
                                completed={task.completed}
                                onComplete={onTaskUpdate}
                                onDelete={onTaskDelete}
                                onEdit={onEdit}
                            />
                        ))
                    }
                </ul>
            ) : <p>No hay tareas.</p>
        }
    </div>
  )
}

export default Tasks