import { useContext } from 'react'
import useForm from '../../hooks/useForm'

import styles from './Register.module.css'
import AuthContext from '../../contexts/authContext';
import useValidator from '../../hooks/useValidator';

const RigsterFormKyes = {
    Email: "email",
    FirstName: "firstName",
    LastName: 'lastName',
    Password: 'password',
    RePassword: 'rePassword'
}

export default function FormRegister() {
    const {registerSubmitHanler,errorFlag, statusToggler} = useContext(AuthContext);
    
    const { values, onChangeHandler, onSubmit } = useForm({
        [RigsterFormKyes.Email]:"",
        [RigsterFormKyes.FirstName]:"",
        [RigsterFormKyes.LastName]:"",
        [RigsterFormKyes.Password]:"",
        [RigsterFormKyes.RePassword]:"",
    }, registerSubmitHanler)

    const {errors,validatorHandler} = useValidator()


    return (
        <form onSubmit={onSubmit}>

            <div className="row g-3">
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            name={RigsterFormKyes.Email}
                            className="form-control"
                            id="subject"
                            placeholder="Email"
                            value={values[RigsterFormKyes.Email]}
                            onBlur={()=>validatorHandler(RigsterFormKyes.Email,values[RigsterFormKyes.Email])}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="email">Email </label>
                        {errors.email && (
                            <p className={styles.errorMessage}>{errors.email}</p>
                        )}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            name={RigsterFormKyes.FirstName}
                            id="firstName"
                            placeholder="First Name"
                            value={values[RigsterFormKyes.FirstName]}
                            onBlur={()=>validatorHandler(RigsterFormKyes.FirstName,values[RigsterFormKyes.FirstName])}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor="firstName">First Name</label>
                        {errors.firstName && (
                            <p className={styles.errorMessage}>{errors.firstName}</p>
                        )}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name={RigsterFormKyes.LastName}
                            placeholder="Last Name"
                            value={values[RigsterFormKyes.LastName]}
                            onChange={onChangeHandler}
                            onBlur={()=>validatorHandler(RigsterFormKyes.LastName,values[RigsterFormKyes.LastName])}
                        />
                        <label htmlFor="lastName">Last Name</label>
                        {errors.lastName && (
                            <p className={styles.errorMessage}>{errors.lastName}</p>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name={RigsterFormKyes.Password}
                            placeholder="Password"
                            value={values[RigsterFormKyes.Password]}
                            onChange={onChangeHandler}
                            onBlur={()=>validatorHandler(RigsterFormKyes.Password,values[RigsterFormKyes.Password])}
                        />
                        <label htmlFor="password">Password</label>
                        {errors.password && (
                            <p className={styles.errorMessage}>{errors.password}</p>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="rePassword"
                            name={RigsterFormKyes.RePassword}
                            placeholder=">Repeat Password"
                            value={values[RigsterFormKyes.RePassword]}
                            onChange={onChangeHandler}
                            onBlur={()=>validatorHandler(RigsterFormKyes.RePassword,values[RigsterFormKyes.RePassword],values[RigsterFormKyes.Password])}
                        />
                        <label htmlFor="rePassword">Repeat Password</label>
                        {errors.rePassword && (
                            <p className={styles.errorMessage}>{errors.rePassword}</p>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <button className={`btn btn-primary w-100 py-3 ${styles.registerButton}`} onClick={()=>{statusToggler}} disabled={Object.values(errors).some(err=>err)} type="submit">
                        Register
                    </button>
                    {errorFlag !== "" && (
                        <p className={styles.errorMessage}>The user already exist!</p>
                    )}
                </div>
                <div className={styles.loingRedirect}>
                    <p>
                        Already have an account? <a className={styles.singInLink} href="/login">Sing In</a>
                    </p>
                </div>
            </div>
        </form>


    )
}