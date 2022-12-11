import styles from './ErrorMessage.module.css';
const ErrorMessage = () => {
    return (
        <div>
            <p className={styles.text}>
                Something going wrong <br />
                Have a nice day and go for another site
            </p>
        </div>
);
}
export default ErrorMessage;