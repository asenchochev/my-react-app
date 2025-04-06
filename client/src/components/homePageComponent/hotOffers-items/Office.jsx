import { Link } from "react-router-dom";

import formatNumberWithCommas from "../../../utils/formatNumberWithCommas";


export default function Office({
    office
}) {
    return (

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                <Link to={`/${office._id}-details`}><img className="img-fluid" src={office.mainPhoto} alt="" style={{width:"100%",height:"270px"}} /></Link>
                    <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                    <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{office.types}</div>
                </div>
                <div className="p-4 pb-0">
                    <h5 className="text-primary mb-3">$ {formatNumberWithCommas(office.price)}</h5>
                    <a className="d-block h5 mb-2" href="">{office.title}</a>
                    <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{office.address}, {office.location}</p>
                </div>
                <div className="d-flex border-top">
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{formatNumberWithCommas(office.meters)} Sqft</small>
                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{formatNumberWithCommas(office.rooms)} Rooms</small>
                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{formatNumberWithCommas(office.baths)} Baths</small>
                </div>
            </div>
        </div>
    )
}