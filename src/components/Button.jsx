
import { useHistory } from 'react-router';
import styles from './styles.module.css'

console.log({styles})
export const Button = ({isDisabled}) => {
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }
    return (
        <div className={styles.buttonContainer}>
        <button className={styles.button} type="submit" onClick = {handleClick}>
            Previous
        </button>
        <button className={styles.button} type="submit" disabled = {isDisabled}>
            Next
        </button>
        </div>       
    )
}