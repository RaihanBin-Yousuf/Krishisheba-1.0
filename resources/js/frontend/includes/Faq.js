import React, { Component } from 'react'

export default class Faq extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <section>
                    <div className="faq-area page-content mb-50">
                        <div className="container">

                            <div className="section-titlehome">
                                <h2>জিজ্ঞাসা কৃত <green>প্রশ্ন সমূহ</green></h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="faq-wrapper">

                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                            What Shipping Methods are Available? <span> <i className="fa fa-chevron-down"></i>
                                                                <i className="fa fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>

                                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            What Payment Methods are Available? <span> <i className="fa fa-chevron-down"></i>
                                                                <i className="fa fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            How I Return back my product? <span> <i className="fa fa-chevron-down"></i>
                                                                <i className="fa fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                            <p>Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingFour">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            What is the payment secutiry system? <span> <i className="fa fa-chevron-down"></i>
                                                                <i className="fa fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                    <div className="card-body">
                                                            <p>Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingFive">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            How can I track my order?<span> <i className="fa fa-chevron-down"></i>
                                                                <i className="fa fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                                    <div className="card-body">
                                                            <p>Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingSix">
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                            Do I need creat account for buy products?<span> <i className="fa fa-chevron-down"></i>
                                                                <i className="fa fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                                                    <div className="card-body">
                                                            <p>Terms know how to pursue pleasure rationally encounter cnces that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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
