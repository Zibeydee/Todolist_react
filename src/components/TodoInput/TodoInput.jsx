import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import style from '../TodoInput/TodoInput.module.css'

function TodoInput() {
    const [txt, setTxt] = useState('')
    const [todo, setTodo] = useState([])
    console.log(txt);


    const getData = (e) => {
        setTxt(e.target.value)
    }

    const addData = () => {
        setTodo([...todo, txt])
        setTxt('')
    }

    const deleteData = (index) => {
        const newTodos = [...todo];
        newTodos.splice(index, 1); 
        setTodo(newTodos); 
    };


    const editData =(index) => {
        const editTask =prompt('Enter new Tasks...');
        if(editTask.trim() ==! '') {
            const updateTask =[...todo]
            updateTask[index]=editTask;
            setTodo(updateTask);
        }
    }




    console.log(todo);

    return (
        <div className={style.list}>
            <div className={style.heading}>
                <img src="https://i.pinimg.com/564x/c6/2b/8e/c62b8e3a25f765f00f0be01cdfbbe594.jpg" alt="" className={style.todoicon} />
                <h1 className={style.text}>Todolist</h1>
            </div>
            <div className={style.buttons}>
            <input className={style.input} type="text" placeholder='Add a new todo...' value={txt} onChange={getData} />
            <button className={style.button} onClick={addData}>Add</button>
            
            </div>
            
            <TodoList props={todo} deleteTodo={deleteData} editTodo={editData}  />
           
           
        </div>
    )
}

export default TodoInput