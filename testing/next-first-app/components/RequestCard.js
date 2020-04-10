import styles from './RequestCard.module.css';

export default function RequestCard(props) {
    return (
        <div className={styles.requestCard}>
            {props.children}
        </div>
    );
}