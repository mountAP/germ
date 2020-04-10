import styles from './RequestsPanel.module.css';

export function RequestsPanel(props) {
    return (
        <div className={styles.requestsPanel}>            
            {props.children}
        </div>
    );
}