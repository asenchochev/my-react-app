import styles from "./Catalog.module.css"

export default function OurAgents() {
    return (
            <div className="container" style={{marginBottom:"40px"}}>
                <div className={`${styles.ourAgentsDiv} text-center mx-auto mb-5 wow fadeInUp`} data-wow-delay="0.1s">
                    <h1 className="mb-3">Property Agents</h1>
                    <p>Meet our dedicated team of professional agents ready to guide you through every step of your real estate journey. Trust our expertise to turn your property aspirations into reality</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="src/assets/img/team-1.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href="www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Elena Rodriguez</h5>
                                <small>Contact: +44 20 7946 0958</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="src/assets/img/team-2.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">John Smith</h5>
                                <small>Contact: +1 (555) 123-4567</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="src/assets/img/team-3.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Aisha Patel</h5>
                                <small>Contact: +81 3 1234 5678</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="src/assets/img/team-4.jpg" alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Marcus Johnson</h5>
                                <small>+61 2 9876 5432</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
} 