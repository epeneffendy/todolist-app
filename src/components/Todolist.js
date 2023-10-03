import React, { useState } from 'react';
import Input from './Input';
import Buttons from './Buttons';
import Card from './Card';

function Todolist() {
    const [newTask, setNewTask] = useState('');
    const [task, setTask] = useState([])

    function handleAddTask(e){
        e.preventDefault();
        console.log(e.target)
        setTask((prevTask) => [
            ...prevTask,
            {
              id: Math.floor(Math.random() * Date.now()),
              name: newTask,
            },
            
        ]);
        setNewTask('')
         
    }
    return (
        <Card>
            <Card.Title>Todolist</Card.Title>
            <Card.Body>
            <form>
                <div className="row">
                    <div className="col-md-10">
                        <Input defaultValue={newTask} onClick={(e)=>setNewTask(e.target.value)}/>
                    </div>
                    <div className="col-md-2">
                        <Buttons onClick={handleAddTask} variant={"primary"} size={"lg"} text={"Add Task"}/>
                    </div>
                </div>
            </form>
            {task.length > 0 ? (
                <ol className={"space-y-2"}>
                    {task.map((item) => {
                        <li>{item.id}</li>
                    })}
                </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>You have {task.length} Task</Card.Footer>
        </Card>
    );
}

export default Todolist;