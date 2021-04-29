import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Hero from '../includes/Hero';
import TopCategorySlider from '../includes/TopCategorySlider';
import TabSlider from '../includes/TabSlider';
import AboutUs from '../includes/AboutUs';
import HowItsWorks from '../includes/HowItsWorks';
import Service from '../includes/Service';
import Cta from '../includes/Cta';
import Contact from '../includes/Contact';
import Footer from '../includes/Footer';
// import TopBarAndHeader from '../includes/TopBarAndHeader';
export default class Index extends Component {
    render() {
        return (
            <div>
                {/* <TopBarAndHeader/> */}
                <Hero/>
                <TopCategorySlider/>
                <TabSlider/>
                <AboutUs/>
                <HowItsWorks/>
                <Service/>
                <Cta/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}
if (document.getElementById('react_fronend_index')) {
    ReactDOM.render(<Index />, document.getElementById('react_fronend_index'));
}
