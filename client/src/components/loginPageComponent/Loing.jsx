import FormLogin from "./FormLogin";
import styles from './Login.module.css'

export default function Login() {
    return (
        <div className={`${styles['container-xxl']} ${styles['py-5']} ${styles.loginDiv}`}>
            <div className="container">
                <div
                    className={`text-center mx-auto mb-5 wow fadeInUp ${styles.singInHeader}`}
                    data-wow-delay="0.1s"
                >
                    <h1 className={`${styles.singInH1} mb-3`}>Sing In</h1>
                </div>
                <div className={`col-md-6 ${styles.registerForm}`}>
                    <div className="wow fadeInUp" data-wow-delay="0.5s" >
                        <FormLogin />
                    </div>
                </div>

            </div>
        </div>
    )
}