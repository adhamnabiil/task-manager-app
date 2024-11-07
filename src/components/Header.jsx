import styles from "./header.module.css";

export default function Header(){
    return(
        <div className={styles.header}>
            <span>Task Manager</span>
        </div>
    )
}