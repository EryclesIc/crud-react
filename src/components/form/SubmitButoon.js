import styles from './SubmitButoon.module.css'

function SubmitButoon({text}){
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButoon