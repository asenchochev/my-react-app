import style from './EditEstate.module.css'

import FormEstate from './Form'
import  HeaderEdit from './HeaderEdit'

export default function EditEstate() {
    return (
        <div className="container-fluid header bg-white p-0">
            <HeaderEdit />
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <h1 className="mb-3">Estate Parameters</h1>
                    </div>
                    <div className={`col-md-6 ${style.editForm}`}>
                        <div className="wow fadeInUp" data-wow-delay="0.5s" >
                            <FormEstate  />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}