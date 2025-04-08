import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './Navigation.module.css'
import AuthContext from '../../contexts/authContext'

export default function Navigation() {
    const { isAuthenticated, logoutSubmitHandler } = useContext(AuthContext)
    return (
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link to="/" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className={`img-fluid ${styles.imageNav}`} src="src/assets/img/icon-villa.png" alt="Icon" />
                    </div>
                    <h1 className="m-0 text-primary">Estate</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">

                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/catalog" className="nav-item nav-link">Catalog</Link>
                        {isAuthenticated && (
                            <>
                                <Link to="/create-estate" className="nav-item nav-link">Create Estate</Link>
                                <Link to="/search" className="nav-item nav-link">Search</Link>
                                <Link to="/my-posts" className="nav-item nav-link">My Posts</Link>
                            </>
                        )}
                    </div>
                    {isAuthenticated && (
                        <button className="btn btn-primary px-3 d-none d-lg-flex" onClick={logoutSubmitHandler}>LOGOUT</button>

                    )}

                    {!isAuthenticated && (
                        <>
                            <Link to="/login" className="btn btn-primary px-3 d-none d-lg-flex">LOGIN</Link>
                            <Link to="/register" className={`${styles.registerButton} btn btn-primary px-3 d-none d-lg-flex`}>REGISTER</Link>
                        </>
                    )}
                </div>
            </nav>
        </div>
    )
}