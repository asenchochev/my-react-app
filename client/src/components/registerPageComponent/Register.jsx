import styles from './Register.module.css'

import FormRegister from './FormRegiseter'

export default function Register() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className={`text-center mx-auto mb-5 wow fadeInUp ${styles.singUpHeader}`} data-wow-delay="0.1s">
                        <h1 className={`mb-3 ${styles.singUpH1}`}>Sing up</h1>
                    </div>
                    <div className={`col-md-6 ${styles.registerForm}`}>
                        <div className="wow fadeInUp" data-wow-delay="0.5s" >
                            <FormRegister />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}