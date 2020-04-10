import Header from './Header';
import styles from './MyLayout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.navBar}>
            <Header />
            {props.children}
        </div>
    );
}  