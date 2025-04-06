import { Link } from "react-router-dom";
import { useContext, useEffect, useReducer } from "react";

import * as estateService from '../../services/estateService'
import styles from './Home.module.css'
import AuthContext from "../../contexts/authContext";

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_COUNT_VILLAS":
            return {
                ...state,
                villas: action.payload
            }
        case "GET_COUNT_APARTMENTS":
            return {
                ...state,
                apartments: action.payload
            }
        case "GET_COUNT_OFFICES":
            return {
                ...state,
                offices: action.payload
            }
        case "GET_COUNT_GARAGES":
            return {
                ...state,
                garages: action.payload
            }

        default:
            return state;
    }
}

export default function HeaderHome() {
    const [state, dispatch] = useReducer(reducer, {})
    const { isAuthenticated } = useContext(AuthContext)

    useEffect(() => {
        estateService.getCountVillas()
            .then((count) => {
                dispatch({
                    type: "GET_COUNT_VILLAS",
                    payload: count
                })
            })
            .catch(err => console.log(err))

        estateService.getCountApartments()
            .then((count) => {
                dispatch({
                    type: "GET_COUNT_APARTMENTS",
                    payload: count
                })
            })
            .catch(err => console.log(err))

        estateService.getCountOffices()
            .then((count) => {
                dispatch({
                    type: "GET_COUNT_OFFICES",
                    payload: count
                })
            })
            .catch(err => console.log(err))

        estateService.getCountGarages()
            .then((count) => {
                dispatch({
                    type: "GET_COUNT_GARAGES",
                    payload: count
                })
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">
                        Find A <span className="text-primary">Perfect Home</span> To Live With
                        Your Family
                    </h1>
                    <p className="animated fadeIn mb-4 pb-2">
                        Discover your dream home with our seamless estate platform. Explore a curated selection of properties, connect with trusted agents, and embark on a journey to find the perfect place to call home.
                    </p>
                    {!isAuthenticated && (
                        <Link
                            to={'/register'}
                            className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
                        >
                            Get Started
                        </Link>
                    )}

                </div>
                <div className="col-md-6 animated fadeIn">
                    <img className="img-fluid" src="src/assets/img/about.jpg" />
                </div>
            </div>
            <div className={`${styles.assestDiv} container-fluid bg-primary mb-5 wow fadeIn`} data-wow-delay="0.1s" >
                <div className="container">
                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.1s">
                        <div className="cat-item d-block bg-light text-center rounded p-3" >
                            <div className="rounded p-4" style={{ padding: '2px' }}>
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLv5-pwJD2K69KrC8DggmFMmtwXiPRRu6KTHY2MbOdv1gZiT6jmsklxhOgao&s" style={{ width: '45px', height: '45px', }} alt="Icon" />
                                </div>
                                <h6>Garage</h6>
                                <span>{state.garages} Properties</span>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.3s">
                        <div className="cat-item d-block bg-light text-center rounded p-3">
                            <div className="rounded p-4" style={{ padding: '2px' }}>
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJ1Yve6AEFmdp0Q-FVyBQ9BDio4zHvpFYAsIf2P1yf7p07XQpz_2pmoRTkw&s" style={{ width: '45px', height: '45px', }} alt="Icon" />
                                </div>
                                <h6>Office</h6>
                                <span>{state.offices} Properties</span>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.5s">
                        <div className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4" style={{ padding: '2px' }}>
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20vlZZPvhq6nkIEhwnD_6OngJ2qps3mrgeznH7BV0F5vovKTn-U9m2UlZLRQ&s" style={{ width: '45px', height: '45px', }} alt="Icon" />
                                </div>
                                <h6>Appartments</h6>
                                <span>{state.apartments} Properties</span>
                            </div>
                        </div>
                    </div>


                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.7s">
                        <div className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4" style={{ padding: '2px' }}>
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFLwsZJj3V8QOTbGCq0sn5r5IIbKrO994JwzSTtG_DYSWsxYVKS4OmrTTDN4&s" style={{ width: '45px', height: '45px', }} alt="Icon" />
                                </div>
                                <h6>Villas</h6>
                                <span>{state.villas} Properties</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}