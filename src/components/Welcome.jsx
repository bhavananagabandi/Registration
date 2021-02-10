import { useHistory } from 'react-router';
import styles from './styles.module.css'

export const Welcome = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/Name');
    }
    return (
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
        <h1>Welcome to our application form</h1>
        <button className={styles.button} type="submit" onClick = {handleClick}>
            Start
        </button>
        </div>
    );
};