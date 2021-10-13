import './Home.css'
import { useState } from 'react';
import { TaskItem } from './TaskItem';

function Home(){
    const [text, setText] = useState("");
    
    const [task, setTask] = useState([
        {
        isCompleted: false,
        name: "Task Camilo",
        },
        {
        isCompleted: false,
        name: "Task Jose",
        },
        {
        isCompleted: false,
        name: "Task React",
        }
    ])
    const handleTaskChange = (index)=> () =>{
        const arr = [...task]
        arr[index].isCompleted = !arr[index].isCompleted;
        setTask(arr);

    }

    const createTask = (event) =>{
        event.preventDefault()
        const array = [...task];
        array.push( 
        {
            isCompleted: false,
            name: text
        }
        )
        setTask(array);
    }

    const changeText = (event) => {
        const value = event.target.value;
        setText(value);
    }

  return (
    <main>
      <div class="form">
        <form onSubmit={createTask}>
          <input value={text} onChange= {changeText} type="text" placeholder="Task Name"/>
          <button>Create Task</button>
        </form>
        <hr/>
        <div class="listContainer">
          <ul class="list">
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
        </div>
      </div>
    
  </main>
  );
}
export default Home;