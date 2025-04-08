import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import style from './CreateEstate.module.css'
import * as estateService from "../../services/estateService"
import AuthContext from '../../contexts/authContext'

import FormEstate from './Form'
import HeaderCreate from './HeaderCreate'


export default function CreateEstate() {
    const navigate = useNavigate();
    const { firstName, lastName } = useContext(AuthContext)
    const createSubmitHandler = async (values) => {
        try {
            values.owner = `${firstName} ${lastName}`
            await estateService.create(values)

            navigate('/catalog')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container-fluid header bg-white p-0">
            <HeaderCreate />
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <h1 className="mb-3">Estate Parameters</h1>
                    </div>
                    <div className={`col-md-6 ${style.createForm}`}>
                        <div className="wow fadeInUp" data-wow-delay="0.5s" >
                            <FormEstate createSubmitHandler={createSubmitHandler} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}