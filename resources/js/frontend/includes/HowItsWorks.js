import React, { Component } from 'react'

export default class HowItsWorks extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <section id="howitsworks" className="howitsworks">
                    <div className="section-titlehome"><h2>কৃষিসেবা <span className="green">কিভাবে কাজ</span> করে</h2></div>
                    <div className="container-how-it-works">
                    
                    <div className="container">
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <ul><br></br>
                            <h3><span className="green">আমাদের ডেমোটি</span> একবার দেখুন</h3> <br></br>
                            <li><i className="icofont-check-circled"></i>সর্বপ্রথম আমাদের ওয়েবসাইটে নিবন্ধন করুন.</li>
                            <li><i className="icofont-check-circled"></i>আপনার প্রোফাইলে প্রবেশ করুন</li>
                            <li><i className="icofont-check-circled"></i>একজন ক্রেতা, বিক্রেতা বা পরিবহণ মালিক হিসাবে প্রবেশ করুন
                            </li>
                            <li><i className="icofont-check-circled"></i>আপনার নতুন পণ্য যুক্ত করুন.</li>
                            <li><i className="icofont-check-circled"></i>ফসলের বৈশিষ্ট্য এবং বিবরণ সরবরাহ করুন.</li>
                            <li><i className="icofont-check-circled"></i>ফসলের নমুনা এবং গুণগত মান যাচাই করার পর সিদ্ধান্ত নিন.</li>
                            <li><i className="icofont-check-circled"></i>ইমেল বা নোটিশ কেন্দ্র দ্বারা আপডেট থাকুন.</li>
                        </ul>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2" id="video_div">
                                {/* <!-- <video id="video" playsinline="true" autoplay="autoplay" muted="muted" loop="loop" type="video/mp4" src="https://agrimp-prod.s3.amazonaws.com/public/AgriMarketPlace_howitworks_demo.mov"></video> --> */}
                                <video id="video" playsInline={true} autoPlay="autoplay" muted="muted" loop="loop" type="video/mp4" src="/frontend-asset/demovideo.mp4"></video>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}
