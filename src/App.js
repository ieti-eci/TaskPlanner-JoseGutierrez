import './App.css';
import { useState } from 'react';
import { TaskItem } from './TaskItem';

function App() {

  const [task, setTask] = useState([
    {
      isCompleted: true,
      name: "Task Camilo",
    },
    {
      isCompleted: false,
      name: "Task Jose",
    },
    {
      isCompleted: true,
      name: "Task React",
    }
  ])
  const handleTaskChange = (index)=> () =>{
    const arr = [...task]
    arr[index].isCompleted = !arr[index].isCompleted;
    setTask(arr);

  }

  return (
    <main>
    <form>
        <input type="text" placeholder="Task Name"/>
        <button>Create Task</button>
    </form>
    <ul>
        {task.map((task, index) => {
          return (
            <TaskItem
              isCheked={task.isCompleted}
              taskName={task.name}
              onTaskChange={handleTaskChange(index)}
            />
          );
        })}
      </ul>
  </main>
  );
}

export default App;
