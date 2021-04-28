import React, { Component } from 'react'

export default class Hero extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <section id="hero">
                    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                
                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
                
                    <div className="carousel-inner" role="listbox">
                
                        {/* <!-- Slide 1 --> */}
                        <div className="carousel-item active">
                        {/* <div className="carousel-item active" style="background-image: url({{ asset('frontend-asset/home_page/img/slide/FarmarCopy_1.jpg') }})"> */}
                        <div className="carousel-container">
                            <div className="container">
                            <h2 className="animate__animated animate__fadeInDown">স্বাগতম  <span>কৃষিসেবায়</span></h2>
                            <p className="animate__animated animate__fadeInUp">কৃষিতে বাংলাদেশের সাফল্য ঈর্ষণীয়। কৃষিজমি কমতে থাকা, জনসংখ্যা বৃদ্ধিসহ জলবায়ু পরিবর্তনের ফলে বন্যা, খরা, লবণাক্ততা ও বৈরী প্রকৃতিতেও খাদ্যশস্য উৎপাদনে বাংলাদেশ এখন বিশ্বে উদাহরণ। ধান, গম ও ভুট্টা বিশ্বের গড় উৎপাদনকে পেছনে ফেলে ক্রমেই এগিয়ে চলছে বাংলাদেশ। সবজি উৎপাদনে তৃতীয় আর চাল ও মাছ উৎপাদনে বাংলাদেশ এখন বিশ্বে চতুর্থ অবস্থানে।</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto"> আরও পড়ুন</a>
                            </div>
                        </div>
                        </div>
                
                        {/* <!-- Slide 2 --> */}
                        <div className="carousel-item">
                        {/* <div className="carousel-item" style="background-image: url({{ asset('frontend-asset/home_page/img/slide/Farmar_2.jpg') }}"> */}
                        <div className="carousel-container">
                            <div className="container">
                            <h2 className="animate__animated animate__fadeInDown">স্বাগতম  <span>কৃষিসেবায়</span></h2>
                            <p className="animate__animated animate__fadeInUp">আমাদের দেশের অর্থনীতি এগিয়ে নিতে কৃষির ভূমিকা অপরিসীম। আমাদের জীবনজীবীকার পাশাপাশি নিজেদের উন্নয়নে আমরা অনেকাংশে কৃষির উপর নির্ভরশীল। "কৃষকসেবার" মূল লক্ষ্য কৃষকদের কাছে তাদের  ন্যায্যমূল্য আদায় আরো সহজতর করা। প্রযুক্তির উন্নয়নে বিশ্ব যখন এগিয়ে চলছে তার নিজের অদম্য গতিতে , সেই গতিতে পিছিয়ে নেই  আমাদের কৃষিখাত। আধুনিকতার ছোয়ায় আমাদের কৃষকরা আগে থেকে সহজ পথ বেছে নিচ্ছে এবং সফল ও হচ্ছে পুরোদমে। </p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">আরও পড়ুন</a>
                            </div>
                        </div>
                        </div>
                
                        {/* <!-- Slide 3 --> */}
                    {/* <div className="carousel-item" style="background-image: url({{ asset('frontend-asset/home_page/img/slide/Farmar_3.jpg') }}"> */}
                    <div className="carousel-item" >
                        <div className="carousel-container">
                            <div className="container">
                            <h2 className="animate__animated animate__fadeInDown">স্বাগতম  <span>কৃষিসেবায়</span></h2>
                            {/* <!-- <p className="animate__animated animate__fadeInUp">প্রযুক্তির উন্নয়নে বিশ্ব যখন এগিয়ে চলছে তার নিজের অদম্য গতিতে , সেই গতিতে পিছিয়ে নেই  আমাদের কৃষিখাত। আধুনিকতার ছোয়ায় আমাদের কৃষকরা আগে থেকে সহজ পথ বেছে নিচ্ছে এবং সফল ও হচ্ছে পুরোদমে।</p> --> */}
                            <p className="animate__animated animate__fadeInUp">বাংলাদেশের জাতীয় অর্থনীতি দাঁড়িয়ে আছে কৃষি, তৈরি পোশাকশিল্প এবং প্রবাসী শ্রমিকদের পাঠানো বৈদেশিক মুদ্রা বা রেমিট্যান্সের ওপর। শেষের দুটি কোনো চিরস্থায়ী ব্যবস্থা নয়। কৃষি চিরস্থায়ী। নানা রকম প্রাকৃতিক দুর্যোগ এবং আবহাওয়ার প্রতিকূলতা মোকাবিলা করে তাঁকে টিকে থাকতে হয়। জাতিকে ক্ষুধামুক্ত রাখতে এবং অপুষ্টি থেকে বাঁচাতে আমাদের কৃষক ও কৃষিবিজ্ঞানীদের অবদান খুব কমই আলোচিত হয়।
                            </p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">আরও পড়ুন</a>
                            </div>
                        </div>
                        </div>
                
                    </div>
                
                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                
                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                
                    </div>
                </section>
            </div>
        )
    }
}
