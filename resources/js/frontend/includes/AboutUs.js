import React, { Component } from 'react'

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <section id="whyus" className="whyus">
                    <div className="container">
                    <div className="section-titlehome">
                        <h2>আমাদের<green> সম্পর্কে</green></h2>
                        </div>
                
                        <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2">
                            
                            <img src="/frontend-asset/home_page/img/ourcountry1.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h4><span className="green">কৃষি সেবা হচ্ছে এমন একটি প্ল্যাটফর্ম যেখানে কৃষক এবং শিল্প ক্রেতাদেরকে একত্রিত করে</span> </h4>
                        <br></br>
                        <p>প্রযুক্তির উন্নয়নে বিশ্ব যখন এগিয়ে চলছে তার নিজের অদম্য গতিতে , সেই গতিতে পিছিয়ে নেই  আমাদের কৃষিখাত। আধুনিকতার ছোয়ায় আমাদের কৃষকরা আগে থেকে সহজ পথ বেছে নিচ্ছে এবং সফল ও হচ্ছে পুরোদমে।তাদের সফলতাকে আরও এক ধাপ এগিয়ে নিয়ে যেতে আমাদের টিম আমাদের এই প্রচেষ্টা </p>
                        <ul>
                            <br></br>
                            
                            <li><i className="icofont-check-circled"></i> কৃষিসেবা ফসল কিনে বা বিক্রি করে না । আমরা কৃষককে আমাদের প্ল্যাটফর্মের মাধ্যমে অনায়াসে তাদের ফসল বিক্রির সুযোগ করে দি</li>
                            <li><i className="icofont-check-circled"></i> "কৃষিকসেবার" মূল লক্ষ্য কৃষকদের কাছে তাদের  ন্যায্যমূল্য আদায় আরো সহজতর করা।</li>
                            <li><i className="icofont-check-circled"></i> আমাদের দেশের যেকোন জায়গা থেকে কৃষকরা এর মাধ্যমে তাদের ফসল সম্পর্কে আপডেট দিতে পারবেন</li>
                            <li><i className="icofont-check-circled"></i> শুধুমাত্র যাচাইকৃত ক্রেতা এবং বিক্রেতাদের নিয়ে গঠিত একটি প্ল্যাটফর্ম।</li>
                            <li><i className="icofont-check-circled"></i> একটি নিরাপদ লেনদেনের মাধ্যমে কৃষকরা তাদের পণ্য বিক্রি করতে পারবে</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}
