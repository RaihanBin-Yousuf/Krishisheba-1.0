import React, { Component } from 'react'

export default class Team extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <section id="team" className="team section-bg">
                    <div className="container">
                        <div className="section-titlehome">
                            <h2>আমাদের  <span className="green">TEAM</span></h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img src="/frontend-asset/home_page/img/team/team-1.jpg" alt=""/>
                                    <h4>RAIHAN IDDIN</h4>
                                    <span> Frontend And Backend end Developer </span>
                                    <div className="social">
                                        <a href=""><i className="icofont-twitter"></i></a>
                                        <a href=""><i className="icofont-facebook"></i></a>
                                        <a href=""><i className="icofont-instagram"></i></a>
                                        <a href=""><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">        
                                    <img src="/frontend-asset/home_page/img/team/team-2.jpg" alt=""/>
                                    <h4>EMTIYAZ</h4>
                                    <span>Frontend And Backend end Developer</span>
                                    <div className="social">
                                        <a href=""><i className="icofont-twitter"></i></a>
                                        <a href=""><i className="icofont-facebook"></i></a>
                                        <a href=""><i className="icofont-instagram"></i></a>
                                        <a href=""><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img src="/frontend-asset/home_page/img/team/team-3.jpg" alt=""/>
                                    <h4>SHORFUDDIN ROBIN</h4>
                                    <span> Backend end Developer</span>
                                    <div className="social">
                                        <a href=""><i className="icofont-twitter"></i></a>
                                        <a href=""><i className="icofont-facebook"></i></a>
                                        <a href=""><i className="icofont-instagram"></i></a>
                                        <a href=""><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}
