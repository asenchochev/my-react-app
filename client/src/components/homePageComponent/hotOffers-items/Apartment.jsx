import { Link } from "react-router-dom";

import formatNumberWithCommas from "../../../utils/formatNumberWithCommas";

export default function Apartemnt({
    apartment
}) {
    return (

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" >
            <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                <Link to={`/${apartment._id}-details`}><img className="img-fluid" src={apartment.mainPhoto} alt="" style={{width:"100%",height:"270px"}} /></Link>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{apartment.types}</div>
                </div>
                <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$ {formatNumberWithCommas(apartment.price)}</h5>
                    <a className="d-block h5 mb-2" href="">{apartment.title}</a>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{apartment.address}, {apartment.location}</p>
                </div>
                <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{formatNumberWithCommas(apartment.meters)} Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{formatNumberWithCommas(apartment.rooms)} Rooms</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{formatNumberWithCommas(apartment.baths)} Baths</small>
                </div>
            </div>
        </div>
    )
}