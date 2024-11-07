import { useContext } from 'react';
import styles from './todoitem.module.css'
import { userContext } from '../App';

export default function TodoItem({item, showCompleted, showUnCompleted}){

    const {persistData, todos, setTodos, todoValue, setTodoValue} = useContext(userContext)


    function handleRemove(item){
        let NewTodos = todos.filter((todo)=> item !== todo)
        setTodos(NewTodos);
        persistData(NewTodos);
    }

    function handleDone(item){
        let NewTodos = todos.map((todo)=>(todo == item? {...todo, done: !todo.done}: todo) )
        setTodos(NewTodos);
        persistData(NewTodos);
    }

    function handleEdit(item){
        setTodoValue({...todoValue, name: item.name})
        handleRemove(item)
    }
   
    const markDone = item.done==true? styles.done : "" ;

    let filter;

    if(showCompleted){
        filter = item.done == false? styles.hide : "";
    }

    if(showUnCompleted){
        filter = item.done == true? styles.hide : "";
    }

    if(showCompleted && showUnCompleted){
        filter = "";
    }

    return(
        <div className={`${styles.card} ${filter}`}>
            <div className={markDone}>
              {item.name}
            </div>

            <div className={styles.btnContainer}>
               <button onClick={()=>handleEdit(item)} className={styles.editButton}>
                  <i className="fa-solid fa-pen-to-square"></i>
               </button>
               <button onClick={()=>handleDone(item)} className={styles.doneButton}>
                  <i className="fa-solid fa-check"></i>
               </button>
               <button onClick={()=>handleRemove(item)} className={styles.deleteButton}>
                   x
               </button>
            </div>
        </div>
    )
}