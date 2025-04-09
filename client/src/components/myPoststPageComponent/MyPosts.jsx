import styles from "./MyPosts.module.css"

import * as estateService from '../../services/estateService'
import { useContext, useEffect, useState } from "react"
import AuthContext from "../../contexts/authContext"
import MyPostsItem from "./MyPostsItem"

export default function MyPosts() {
    const { userId,firstName,lastName } = useContext(AuthContext)
    const [estates, setEstates] = useState([])

    useEffect(() => {
        estateService.getMyPosts(userId)
            .then(setEstates)
            .catch(err => console.log(err));
    }, [userId])

    return (
        <>
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">My Posts</h1>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <img className="img-fluid" src="src/assets/img/header.jpg" alt="" />
                    </div>
                </div>
                <p className={styles.pHeader} ></p>

            </div>
            <div className="container-xxl py-5" >

                <div className="container" style={{ paddingBottom: "80px" }}>
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
                                {estates.length === 0 && (
                                    <div className="col-lg-6">
                                        <div
                                            className="text-start mx-auto mb-5 wow slideInLeft"
                                            data-wow-delay="0.1s"
                                        >
                                            <h4 className="mb-3">User {firstName} {lastName} dose not have posts!</h4>
                                        </div>
                                    </div>
                                )}
                                {estates.map(estate => <MyPostsItem key={estate._id} estate={estate} />)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}