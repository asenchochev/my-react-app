import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

export default function Footer() {
    return (


        <footer className={`${styles['footer-distributed']} ${styles.footerDiv}`}>
            <div>

                <Link to="/" className={`navbar-brand d-flex align-items-center text-center ${styles.navFooter}`}>
                    <div className="icon p-2 me-2">
                        <img className={`img-fluid ${styles.imageNav}`} src="src/assets/img/icon-villa.png" alt="Icon" />
                    </div>
                    <h1 className={`m-0 text-primary ${styles.estateH1}`}>Estate</h1>
                </Link>
                <div className={styles.sloganP}>
                    <p className={styles['footer-company-name']}>© 2025 Author: Asen Chochev </p>
                </div>
            </div>
        </footer>
    )
}