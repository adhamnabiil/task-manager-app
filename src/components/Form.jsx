import { useContext } from 'react';
import styles from './form.module.css'
import { userContext } from '../App';

export default function Form(){
  const {persistData, todoValue, setTodoValue, todos, setTodos} = useContext(userContext)

  function handleAdd(e){
    e.preventDefault();
    if(todoValue.name == ""){
      return
    }
    let NewTodos = [...todos, todoValue]
    setTodos(NewTodos);
    persistData(NewTodos);
    setTodoValue({name:"", done:false});
  }
 return(
   <div>
      <form>
          <div className={styles.container}>
           <input className={styles.input} type="text" value={todoValue.name} 
           onChange={(e)=>setTodoValue({name:e.target.value, done:false})}/>

           <button className={styles.btn} onClick={(e)=>handleAdd(e)}>Add</button>
          </div>
       </form>
   </div> 
 )
}