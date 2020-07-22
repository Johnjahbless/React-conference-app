import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Speakers extends Component {
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
                        <h2 className="page-title">speakars</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">speakars</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="our-speaker-area section-padding-100">
        <div className="container">
       

         <div className="row">
             
             <div className="col-12 col-sm-6 col-lg-4">
                 <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                     
                     <div className="speaker-single-thumb">
                         <img src="img/bg-img/4.jpg" alt=""/>
                     </div>
                     
                     <div className="social-info">
                         <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                         <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                         <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                         <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                     </div>
                     
                     <div className="speaker-info">
                         <h5>Albert Barnes</h5>
                         <p>Founder</p>
                     </div>
                 </div>
             </div>

            
             <div className="col-12 col-sm-6 col-lg-4">
                 <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                     
                     <div className="speaker-single-thumb">
                         <img src="img/bg-img/5.jpg" alt=""/>
                     </div>
                     
                     <div className="social-info">
                         <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                         <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                         <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                         <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                     </div>
                     
                     <div className="speaker-info">
                         <h5>Patricia Stanley</h5>
                         <p>Product Lead</p>
                     </div>
                 </div>
             </div>

             
             <div className="col-12 col-sm-6 col-lg-4">
                 <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                    
                     <div className="speaker-single-thumb">
                         <img src="img/bg-img/6.jpg" alt=""/>
                     </div>
                    
                     <div className="social-info">
                         <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                         <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                         <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                         <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                     </div>
                   
                     <div className="speaker-info">
                         <h5>Evelyn Stone</h5>
                         <p>Photographer</p>
                     </div>
                 </div>
             </div>

             
             <div className="col-12 col-sm-6 col-lg-4">
                 <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                    
                     <div className="speaker-single-thumb">
                         <img src="img/bg-img/7.jpg" alt=""/>
                     </div>
                     
                     <div className="social-info">
                         <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                         <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                         <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                         <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                     </div>
                     
                     <div className="speaker-info">
                         <h5>Evelyn Stone</h5>
                         <p>Photographer</p>
                     </div>
                 </div>
             </div>

            
             <div className="col-12 col-sm-6 col-lg-4">
                 <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                    
                     <div className="speaker-single-thumb">
                         <img src="img/bg-img/8.jpg" alt=""/>
                     </div>
                   
                     <div className="social-info">
                         <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                         <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                         <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                         <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                     </div>
                    
                     <div className="speaker-info">
                         <h5>Susan Hopkins</h5>
                         <p>UX Manager</p>
                     </div>
                 </div>
             </div>

          
             <div className="col-12 col-sm-6 col-lg-4">
                 <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                     
                     <div className="speaker-single-thumb">
                         <img src="img/bg-img/9.jpg" alt=""/>
                     </div>
                  
                     <div className="social-info">
                         <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                         <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                         <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                         <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                     </div>
                  
                     <div className="speaker-info">
                         <h5>Michael Fowler</h5>
                         <p>Product Design</p>
                     </div>
                 </div>
             </div>

             <div className="col-12">
                 <div className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp" data-wow-delay="300ms">
                     <Link className="btn confer-btn" to="/speakers">View All Speaker <i className="zmdi zmdi-long-arrow-right"></i></Link>
                 </div>
             </div>
         </div>
        </div>
    </section>
           </>
            )
        }
    }