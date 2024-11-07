import { useContext, useState } from 'react'
import TodoItem from './TodoItem'
import styles from './todosdisplay.module.css'
import { userContext } from '../App'

export default function TodosDisplay({}){
    const { todos } = useContext(userContext);

    const [showCompleted, setShowCompleted] = useState(false)
    const [showUnCompleted, setShowUnCompleted] = useState(false)
    
    return(
    <div className={styles.container}>
        <div className={styles.title}>Tasks</div>
        <div className={styles.checkboxContainer}>
            <label>
                <input type="checkbox" onChange={()=>setShowCompleted(!showCompleted)} />
                Show completed
            </label>
            <label>
                <input type="checkbox" onChange={()=>setShowUnCompleted(!showUnCompleted)}/>
                Show Uncompleted
            </label>
        </div>
        {todos.map((item, index)=>(
            <TodoItem key={index} item={item} showCompleted={showCompleted} showUnCompleted={showUnCompleted}/>
        ))}
    </div>
    
)
}