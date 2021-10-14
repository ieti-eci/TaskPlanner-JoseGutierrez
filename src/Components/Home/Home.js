import './Home.css'
import { useState } from 'react';
import OutlinedCard from '../../Task';

function Home(){
    const [text, setText] = useState("");
    
    const [task, setTask] = useState([
        {
          user: 'JoseGum',
          tasks: [
              {
              isCompleted: false,
              name: "Task Camilo",
              description: "Camilo's task",
              dueDate: '13/10/2021'
              },
              {
              isCompleted: false,
              name: "Task Jose",
              description: "Jose's task",
              dueDate: '15/10/2021'
              },
              {
              isCompleted: false,
              name: "Task React",
              description: "React's task",
              dueDate: '20/10/2021'
              }
          ]
        }     
    ])

    const handleTaskChange = (index)=> () =>{
        const arr = [...task]
        for (const user of task) {
          if( user.user === sessionStorage.getItem('cu') ){
            user.tasks[index].isCompleted = !user.tasks[index].isCompleted;
          }
        }
        setTask(arr);

    }

    const createTask = (event) =>{
        event.preventDefault()
        const description = prompt('Type the task description here');
        const dueDate = prompt('Task due date: ');
        const array = [...task];
        let flag = false;
        for (const users of array) {
          if( users.user === sessionStorage.getItem('cu') ){
            flag = true;
            users.tasks.push( {
              isCompleted: false,
              name: text,
              description: description,
              dueDate: dueDate
            })
          }
        }
        if( !flag ){
          array.push({
            user: sessionStorage.getItem('cu'),
            tasks: [
              {
                isCompleted: false,
                name: text,
                description: description,
                dueDate: dueDate
              }
            ]
          })
        }
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
              {task.map((task) => { 
                if(task.user === sessionStorage.getItem('cu')){
                  return(
                    task.tasks.map( (task, index) => {
                      return (
                        <div class="space">
                          <><OutlinedCard name={task.name} description={task.description} dueDate={task.dueDate} /></>
                        </div>
                      );
                    })
                  );  
                } 
              })}
              
            
          </ul>
        </div>
      </div>
    
  </main>
  );
}
export default Home;