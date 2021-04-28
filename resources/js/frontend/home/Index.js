import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import AboutUs from '../includes/AboutUs';
import Contact from '../include/Contact';
import Cta from '../includes/Cta';
import Faq from '../includes/Faq';
import Footer from '../includes/Footer';
import Hero from '../includes/Hero';
import HowItsWorks from '../includes/HowItsWorks';
import Service from '../includes/Service';
import TabSlider from '../includes/TabSlider';
import Team from '../includes/Team';
import TopBarAndHeader from '../includes/TopBarAndHeader';
import TopCategorySlider from '../includes/TopCategorySlider';
import TopBarAndHeader from '../includes/TopBarAndHeader';
export default class Index extends Component {
    render() {
        return (
            <div>
                <AboutUs/>
                <Contact/>
                <Cta/>
                <Faq/>
                <Footer/>
                <Hero/>
                <HowItsWorks/>
                <Service/>
                <TabSlider/>
                <Team/>
                <Service/>
                <TopBarAndHeader/>
                <TopCategorySlider/>              
            </div>
        )
    }
}
if (document.getElementById('react_fronend_index')) {
    ReactDOM.render(<Index />, document.getElementById('react_fronend_index'));
}
