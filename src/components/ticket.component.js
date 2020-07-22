import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Tickets extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
            <>
<section className="breadcrumb-area bg-img bg-gradient-overlay jarallax" style={{backgroundImage: "url(img/bg-img/27.jpg)"}}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <h2 className="page-title">Tickets</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Tickets</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section className="our-ticket-pricing-table-area section-padding-100-0">
        <div className="container">
            <div className="row">
                
                <div className="col-12 col-lg-4">
                    <div className="single-ticket-pricing-table style-2 text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 className="ticket-plan">1 day pass</h6>
                        
                        <div className="ticket-icon">
                            <img src="img/core-img/p1.png" alt=""/>
                        </div>
                        <h2 className="ticket-price"><span>$</span>59</h2>
                        <Link to="/get-tickets" className="btn confer-btn w-100 mb-30">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></Link>
                       
                        <div className="ticket-pricing-table-details">
                            <p><i className="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                            <p><i className="zmdi zmdi-check"></i> Coffee-break</p>
                            <p><i className="zmdi zmdi-check"></i> Lunch and Networking</p>
                            <p><i className="zmdi zmdi-check"></i> Keynote talk</p>
                            <p><i className="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                </div>

               
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-ticket-pricing-table style-2 active text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 className="ticket-plan">Full pass</h6>
                        
                        <div className="ticket-icon">
                            <img src="img/core-img/p2.png" alt=""/>
                        </div>
                        <h2 className="ticket-price"><span>$</span>99</h2>
                        <Link to="/get-tickets" className="btn confer-btn w-100 mb-30">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></Link>
                        
                        <div className="ticket-pricing-table-details">
                            <p><i className="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                            <p><i className="zmdi zmdi-check"></i> Coffee-break</p>
                            <p><i className="zmdi zmdi-check"></i> Lunch and Networking</p>
                            <p><i className="zmdi zmdi-check"></i> Keynote talk</p>
                            <p><i className="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-ticket-pricing-table style-2 text-center mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <h6 className="ticket-plan">Group pass</h6>
                       
                        <div className="ticket-icon">
                            <img src="img/core-img/p3.png" alt=""/>
                        </div>
                        <h2 className="ticket-price"><span>$</span>199</h2>
                        <Link to="/get-tickets" className="btn confer-btn w-100 mb-30">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></Link>
                    
                        <div className="ticket-pricing-table-details">
                            <p><i className="zmdi zmdi-check"></i> One Day Conference Ticket</p>
                            <p><i className="zmdi zmdi-check"></i> Coffee-break</p>
                            <p><i className="zmdi zmdi-check"></i> Lunch and Networking</p>
                            <p><i className="zmdi zmdi-check"></i> Keynote talk</p>
                            <p><i className="zmdi zmdi-check"></i> Talk to the Editors Session</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="call-to-action-area bg-img bg-gradient-overlay jarallax section-padding-100" style={{backgroundImage: "url(img/bg-img/14.jpg)"}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="call-to-action-content text-center">
                        <div className="call-to-action-heading">
                            <h6>the event consistently</h6>
                            <h2>Osha Compliance</h2>
                        </div>
                        <div className="event-time">
                            <p><i className="zmdi zmdi-alarm-check"></i> 2-14 Jan 2019</p>
                            <p><i className="zmdi zmdi-map"></i> Mountain Resort, Phoenix, USA</p>
                        </div>
                    </div>

                    <div className="ticket-btn text-center">
                        <a href="#/" className="btn confer-btn-white-2 mt-40">Get Tickets <i className="zmdi zmdi-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </>
            )
        }
    }