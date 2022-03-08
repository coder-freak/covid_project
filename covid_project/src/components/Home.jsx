import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h2><p class="flicker">Welcome!</p><b></b><p class="fast-flicker"> To the Website</p></h2>
                            <br/>
                            <br/>
                            <p className="lead text-center fs-4 mb-5 text-white">Go through the website to know more about us! Login to test for COVID-19</p>
                        </div>
                    </div>
                </div>
            </section>
           <About/>
           <Contact/>
        </div>
    );
}

export default Home;