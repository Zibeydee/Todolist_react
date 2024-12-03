import React from 'react'
import style from '../TodoList/TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPenToSquare} from '@fortawesome/free-solid-svg-icons'



function TodoList({ props, deleteTodo,editTodo}) {
  return (
    <div >
      {props.map((todo, index) => (
        <div key={index} className={style.tasks}>
          <p className={style.todoItem}>{todo}</p>
          <div className={style.buttons}>
            <button className={style.delete} type="button" onClick={() => deleteTodo(index)}><FontAwesomeIcon icon={faXmark} /></button>
            <button className={style.edit} type='button' onClick={() =>editTodo()}><FontAwesomeIcon icon={faPenToSquare} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList