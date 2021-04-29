import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-titlehome">
                            <h2>যোগাযোগ</h2>
                        </div>
                    
                        <div className="row">
                    
                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="address">
                                        <i className="icofont-google-map"></i>
                                        <h4>স্থান</h4>
                                        <p>৪৪ নং,হাজারি লেইন,কতোয়ালী,চট্টগ্রাম। </p>
                                    </div>
                                    <div className="email">
                                        <i className="icofont-envelope"></i>
                                        <h4>ইমেল:</h4>
                                        <p>info@example.com</p>
                                    </div>
                                
                                    <div className="phone">
                                        <i className="icofont-phone"></i>
                                        <h4>যোগাযোগ নং:</h4>
                                        <p>***************</p>
                                    </div>

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label htmlFor="name">আপনার নাম</label>
                                <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                                </div>
                                <div className="form-group col-md-6">
                                <label htmlFor="name">আপনার ইমেল</label>
                                <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">বিষয়</label>
                                <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">বার্তা</label>
                                <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">লোডিং</div>
                                <div className="error-message"></div>
                                <div className="sent-message">আপনার বার্তাটি প্রেরন করা হয়েছে । ধন্যবাদ!</div>
                            </div>
                            <div className="text-center"><button type="submit">বার্তা পাঠান</button></div>
                            </form>
                        </div>
                        </div>	
                    </div>
                </section>
            </div>
        )
    }
}
