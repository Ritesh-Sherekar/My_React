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

    }

    function handleUpTask(index){

    }

    function handleDownTask(index){

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

                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button onClick={() => handleUpTask(index)}>☝</button>
                        <button onClick={() => handleDownTask(index)}>👇</button>
                    </li>
                )}

            </ol>
        </div>
    );
}

export default ToDoList