
import { useEffect, useState } from "react";

import * as estateService from '../../services/estateService'

import CatalogListItem from "./CatalogListItem";

export default function ListCatalog() {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        estateService.getAll()
            .then(setEstates)
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <div className="container-xxl py-5">

                <div className="container">
                    <div className="row g-0 gx-5 align-items-end divHeaderTex">
                        <div className="col-lg-6">
                            <div
                                className="text-start mx-auto mb-5 wow slideInLeft"
                                data-wow-delay="0.1s"
                            >
                                <h1 className="mb-3">Property Listing</h1>
                                <p style={{ textAlign: "center" }}>
                                    Browse our extensive catalog of diverse estates. From charming apartments to luxurious villas, find your ideal property. Elevate your living experience with our comprehensive and user-friendly estate catalog.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 text-start text-lg-end wow slideInRight"
                            data-wow-delay="0.1s"
                        >
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {estates.length === 0 && (
                                    <div className="col-lg-6">
                                        <div
                                            className="text-start mx-auto mb-5 wow slideInLeft"
                                            data-wow-delay="0.1s"
                                        >
                                            <h3 className="mb-3">There are no published estate ads</h3>
                                        </div>
                                    </div>
                                )}
                                {estates.map(estate => <CatalogListItem key={estate._id} estate={estate} />)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}