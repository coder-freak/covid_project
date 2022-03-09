import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import CovidData from './CovidData';
const About = () => {
    return (
        <div>
            <section id="about" className="pb-5">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="Free-Covid-19-Testing.png" alt="About" className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 class="style">COVID <b/> -19 <b/> WEBSITE </h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">The Coronavirus Disease 2019 (COVID-19) pandemic has caused concern in a number of countries, particularly those where the number of cases has risen dramatically. Because of the coronavirus's continuous spread, this predicament appears to be here to stay. Testing and diagnosis is a time-consuming and resource-intensive process that drains into a country's already few healthcare resources. This outbreak has instilled unreasonable fear and worry in the population, causing cultural norms to be disrupted, such as panic buying and stockpiling of everyday goods, and posing major health hazards to the general public. 
                                                    Due to the lack of health support and the rising need for hospital beds and testing kits, we propose to develop an Artificial intelligence-based self-diagnosis and participatory surveillance web application for coronavirus disease. Our objective is to help patients self-diagnose and predict if they might be affected by the covid 19 virus which is diagnosed using X-ray images and their symptoms.</p>
                            <NavLink to="/CovidData"className="btn btn-primary rounded-pill px-4 py-2">Get Covid Statistics</NavLink>
                            <NavLink to="/contact" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;