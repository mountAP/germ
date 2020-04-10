import Link from 'next/link';

import styles from './Header.module.css'

export default function Header() {
    return (
        <div>
            <Link href="/">
                <a className={styles.navItem}>Home</a>
            </Link>
            <Link href="/about">
                <a className={styles.navItem}>About</a>
            </Link>
        </div>
    );
}
