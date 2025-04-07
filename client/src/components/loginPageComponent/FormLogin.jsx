import { useContext } from 'react'

import styles from './Login.module.css'
import useForm from '../../hooks/useForm'
import AuthContext from '../../contexts/authContext'
import useValidator from '../../hooks/useValidator'

const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

export default function FormLogin() {

    const { loginSubmitHandler, errorFlag, statusToggler } = useContext(AuthContext)

    const { values, onChangeHandler, onSubmit } = useForm({
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    }, loginSubmitHandler)

    const { errors, validatorHandler } = useValidator()


    return (
        <form onSubmit={onSubmit}>

            <div id="inputDiv" className={`row g-3 ${styles.divLogin}`}>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name={LoginFormKyes.Email}
                            style={{maxWidth:"400px",marginLeft:"130px"}}
                            placeholder="Email"
                            value={values[LoginFormKyes.Email]}
                            onChange={onChangeHandler}
                            onBlur={()=>validatorHandler(LoginFormKyes.Email,values.email)}
                        />
                        <label style={{marginLeft:"130px"}} htmlFor="email">Email</label>
                        {errors.email && (
                            <p className={styles.errorMessage}>{errors.email}</p>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            style={{maxWidth:"400px",marginLeft:"130px"}}
                            id="subject"
                            name={LoginFormKyes.Password}
                            placeholder="Password"
                            value={values[LoginFormKyes.Password]}
                            onChange={onChangeHandler}
                            onBlur={()=>validatorHandler(LoginFormKyes.Password,values.password)}
                        />
                        <label style={{marginLeft:"130px"}} htmlFor="subject">Password</label>
                        {errors.password && (
                            <p className={styles.errorMessage}>{errors.password}</p>
                        )}
                    </div>
                </div>

                <div className="col-12" style={{paddingTop:"30px"}}>

                    <button
                        className={`btn btn-primary w-100 py-3 ${styles.loginButton}`}
                        disabled={Object.values(errors).some(er => er)}
                        onClick={statusToggler}
                        type="submit">
                        Login
                    </button>
                </div>
                {errorFlag !== "" && (
                    <p className={styles.errorMessage}>The user does not exist , please insert the correct email and password!</p>
                )}
                <div className={styles.registerRedirect}>

                    <p>
                        If you don't have register <a className={styles.singUpLink} href="/register">Register</a>
                    </p>
                </div>
            </div>
        </form>


    )
}