import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="container">
                        <h2>কৃষিসেবা</h2>
                        <p>প্রযুক্তির উন্নয়নে বিশ্ব যখন এগিয়ে চলছে তার নিজের অদম্য গতিতে , সেই গতিতে পিছিয়ে নেই  আমাদের কৃষিখাত।</p>
                        <div className="social-links">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                        <div className="copyright">
                            &copy; Copyright <strong><span>কৃষিসেবা</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                        Designed by <a>কৃষিসেবা TEAM</a>
                        </div>
                    </div>
                    </footer>
            </div>
        )
    }
}
