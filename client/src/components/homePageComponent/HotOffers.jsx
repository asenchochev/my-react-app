import { Link } from "react-router-dom";
import { useEffect, useReducer } from "react";

import * as estateService from '../../services/estateService'

import Villa from "./hotOffers-items/Villa";
import Apartment from "./hotOffers-items/Apartment";
import Garage from "./hotOffers-items/Garage";
import Office from "./hotOffers-items/Office";

const initialState = {
    villas: [],
    apartments: [],
    offices: [],
    garages: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_LATES_VILLAS":
            return {
                ...state,
                villas: action.payload
            }
        case "GET_LATES_APARTMENTS":
            return {
                ...state,
                apartments: action.payload
            }
        case "GET_LATES_OFFICES":
            return {
                ...state,
                offices: action.payload
            }
        case "GET_LATES_GARAGES":
            return {
                ...state,
                garages: action.payload
            }

        default:
            return state;
    }
}

export default function HotOffers() {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        estateService.getLatesVillas()
            .then((villas) => {
                dispatch({
                    type: "GET_LATES_VILLAS",
                    payload: villas
                })
            })
            .catch(err => console.log(err))

        estateService.getLatesApartment()
            .then((result) => {
                dispatch({
                    type: "GET_LATES_APARTMENTS",
                    payload: result
                })
            })
            .catch(err => console.log(err))

        estateService.getLatesOffice()
            .then((result) => {
                dispatch({
                    type: "GET_LATES_OFFICES",
                    payload: result
                })
            })
            .catch(err => console.log(err))

        estateService.getLatesGarage()
            .then((result) => {
                dispatch({
                    type: "GET_LATES_GARAGES",
                    payload: result
                })
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Lates Offers</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">

                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Villa</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">Apartment</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">Office</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-4">Garage</a>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4" >
                            {state.villas.length === 0 && (
                                <div className="col-lg-6">
                                    <div
                                        className="text-start mx-auto mb-5 wow slideInLeft"
                                        data-wow-delay="0.1s"
                                    >
                                        <h3 className="mb-3">There are no published villa ads</h3>
                                    </div>
                                </div>
                            )}
                            {state.villas.map(villa => <Villa key={villa._id} villa={villa} />)}
                        </div>
                    </div>

                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4" >
                        {state.apartments.length === 0 && (
                                <div className="col-lg-6">
                                    <div
                                        className="text-start mx-auto mb-5 wow slideInLeft"
                                        data-wow-delay="0.1s"
                                    >
                                        <h3 className="mb-3">There are no published apartment ads</h3>
                                    </div>
                                </div>
                            )}
                            {state.apartments.map(apartment => <Apartment key={apartment._id} apartment={apartment} />)}
                        </div>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row g-4" >
                        {state.offices.length === 0 && (
                                <div className="col-lg-6">
                                    <div
                                        className="text-start mx-auto mb-5 wow slideInLeft"
                                        data-wow-delay="0.1s"
                                    >
                                        <h3 className="mb-3">There are no published office ads</h3>
                                    </div>
                                </div>
                            )}
                            {state.offices.map(office => <Office key={office._id} office={office} />)}
                        </div>
                    </div>
                    <div id="tab-4" className="tab-pane fade show p-0">
                        <div className="row g-4" >
                        {state.garages.length === 0 && (
                                <div className="col-lg-6">
                                    <div
                                        className="text-start mx-auto mb-5 wow slideInLeft"
                                        data-wow-delay="0.1s"
                                    >
                                        <h3 className="mb-3">There are no published garage ads</h3>
                                    </div>
                                </div>
                            )}
                            {state.garages.map(garage => <Garage key={garage._id} garage={garage} />)}
                        </div>
                    </div>
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s" style={{ paddingTop: '30px' }}>
                        <Link to="/catalog" className="btn btn-primary py-3 px-5" href="">Browse More Property</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}