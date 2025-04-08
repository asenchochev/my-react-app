import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import styles from './Details.module.css'
import formatNumberWithCommas from '../../utils/formatNumberWithCommas';
import AuthContext from '../../contexts/authContext';


export default function DetailInformation({
    _id,
    _ownerId,
    title,
    price,
    mainPhoto,
    secondPhoto,
    thirdPhoto,
    address,
    description,
    types,
    meters,
    rooms,
    baths,
    location,
    owner,
    onDeleteClickHandler,
}) {
    const { userId } = useContext(AuthContext)
    
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <h1 className={`mb-4 ${styles.h1Header}`}>{title}</h1>
                    <div className={`row gy-4 ${styles.headerInformation}`} >
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-light rounded p-3">

                                <div
                                    className={`d-flex align-items-center bg-white rounded p-3 ${styles.headerInformationDiv}`}
                                >
                                    <div className={`${styles.headerInformationDiv} icon me-3`} >
                                        <i className="fa fa-map-marker-alt text-primary" />
                                    </div>
                                    <span>Location: {address} - {location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="bg-light rounded p-3">
                                <div
                                    className={`${styles.headerInformationDiv} d-flex align-items-center bg-white rounded p-3`}
                                >
                                    <div className={`${styles.headerInformationDiv} icon me-3`} >
                                        <i className="fa fa-phone-alt text-primary" />
                                    </div>
                                    <span>Owner: {owner}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-light rounded p-3">
                                <div
                                    className={`${styles.headerInformationDiv} d-flex align-items-center bg-white rounded p-3`}
                                >
                                    <div className={`${styles.headerInformationElements} icon me-3`}>
                                        <img src="src/assets/img/icon-deal.png" alt="" />
                                    </div>
                                    <span>Price: {formatNumberWithCommas(Number(price))} $</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="position-relative overflow-hidden p-5 pe-0">
                            <Carousel >
                                <Carousel.Item>
                                    <img className={styles.imgCarousel} src={mainPhoto} alt="" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={styles.imgCarousel} src={secondPhoto} alt="" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={styles.imgCarousel} src={thirdPhoto} alt="" />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" >
                        <p className="mb-4" style={{ paddingTop: "70px" }}>
                            {description}
                        </p>
                        <p>
                            <i className="fa fa-check text-primary me-3" />
                            Type: {types}
                        </p>
                        <p>
                            <i className="fa fa-check text-primary me-3" />
                            Square Meters: {meters}
                        </p>
                        <p>
                            <i className="fa fa-check text-primary me-3" />
                            Rooms: {rooms}
                        </p>
                        <p>
                            <i className="fa fa-check text-primary me-3" />
                            Baths: {baths}
                        </p>
                        {_ownerId === userId && (
                            <>
                                <Link className="btn btn-primary py-3 px-5 mt-3" to={`/${_id}-edit`}>EDIT</Link>
                                <Button className={styles.buttonDelete} onClick={() => onDeleteClickHandler(_id)} variant="danger">DELETE</Button>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}