import { useState } from "react";

import * as estateService from '../../services/estateService'

import styles from "./Serach.module.css"
import useForm from '../../hooks/useForm';
import SearchListItem from "./SearchLIstItem";

const initialValues = {

    type: "",
    location: "",
    minPrice: "",
    maxPrice: "",
}

export default function Search() {
    const [searchEstate, setSearchEstate] = useState([]);


    const createSubmitHandler = async (values) => {
        try {
            const type = values.type
            const location = values.location
            const minPrice = values.minPrice === "" ? Number.MIN_SAFE_INTEGER : values.minPrice
            const maxPrice = values.maxPrice === "" ? Number.MAX_SAFE_INTEGER : values.maxPrice


            const estate = await estateService.search(type, location, minPrice, maxPrice)
            setSearchEstate(estate)
        } catch (error) {
            console.log(error);
        }

    }

    const { values, onChangeHandler, onSubmit } = useForm(initialValues, createSubmitHandler)
    return (
        <>
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">Search Property</h1>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <img className="img-fluid" src="src/assets/img/header.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className={`container-fluid bg-primary mb-5 wow fadeIn ${styles.searchDiv}`} data-wow-delay="0.1s" >
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10" >
                            <form onSubmit={onSubmit}>
                                <div className="row g-2"  >
                                    <div className={` ${styles.divProperty} col-md-4`}>
                                        <select
                                            name="type"
                                            id="types"
                                            className={`${styles.formProperty} col-md-4 form-control border-0 py-3`}
                                            value={values.type}
                                            onChange={onChangeHandler}
                                        >
                                            <option value="">Chose type</option>
                                            <option value="Villa">Villa</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Office">Office</option>
                                            <option value="Garage">Garage</option>
                                        </select>
                                        <input
                                            name="location"
                                            value={values.location}
                                            onChange={onChangeHandler}
                                            type="text"
                                            className={`${styles.formProperty} col-md-4 form-control border-0 py-3`}
                                            placeholder="Location"
                                        />
                                        <input
                                            name="minPrice"
                                            value={values.minPrice}
                                            placeholder="Minimum Price"
                                            onChange={onChangeHandler}
                                            type="number"
                                            className={`${styles.formProperty} col-md-4 form-control border-0 py-3`}

                                        />
                                        <input
                                            name="maxPrice"
                                            value={values.maxPrice}
                                            onChange={onChangeHandler}
                                            type="number"
                                            className={`${styles.formProperty} col-md-4 form-control border-0 py-3`}
                                            placeholder="Maximum Price"
                                        />
                                        <div className="col-md-2">
                                            <button className={`${styles.formProperty} col-md-4 btn btn-dark border-0 py-3`}>Search</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">

                <div className="container">
                    <div className="col-lg-6">
                        <div
                            className="text-start mx-auto mb-5 wow slideInLeft"
                            data-wow-delay="0.1s"
                        >
                            <h1 className="mb-3">Property Listing</h1>

                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {searchEstate.length === 0 && (
                                    <div className="col-lg-6">
                                        <div
                                            className="text-start mx-auto mb-5 wow slideInLeft"
                                            data-wow-delay="0.1s"
                                        >
                                            <h3 className="mb-3">No matches</h3>
                                        </div>
                                    </div>
                                )}
                                {searchEstate.map(estate => <SearchListItem key={estate._id} estate={estate} />)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}