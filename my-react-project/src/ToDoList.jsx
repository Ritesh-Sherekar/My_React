import { useState } from "react";

function ToDoList(){

    const [task, setTask] = useState(["Do Study", "Go to Work", "Make Lunch"]);
    const [newTask, setNewTask] = useState("");

    function handleTaskChange(event){
        setNewTask(event.target.value);
    }

    function handleAddTask(){
        setTask(t => [...t, newTask]);
        setNewTask("");
    }

    function handleDeleteTask(index){
        setTask(task.filter((e,i)=> i !== index));
    }

    function handleUpTask(index){
        if(index > 0){
            const updatedTask = [...task];

            [updatedTask[index], updatedTask[index - 1]] = 
            [updatedTask[index - 1], updatedTask[index]];

            setTask(updatedTask);
        }
    }

    function handleDownTask(index){
        if(index < task.length - 1){
            const updatedTask = [...task];

            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1], updatedTask[index]];

            setTask(updatedTask);
        }
    }

    return(
        <div className="to-do-list">
            <h2>To-Do-List</h2>

            <input type="text" placeholder="Enter the task..."
                    value={newTask} onChange={handleTaskChange}/>

            <button onClick={handleAddTask}>Add Task</button>        

            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        <span>{task}</span>

                        <button className="delete-btn" onClick={() => handleDeleteTask(index)} >Delete</button>
                        <button className="up-down-btn" onClick={() => handleUpTask(index)}>☝</button>
                        <button className="up-down-btn" onClick={() => handleDownTask(index)}>👇</button>
                    </li>
                )}

            </ol>
        </div>
    );
}

export default ToDoList