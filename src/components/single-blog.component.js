import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class SingleBlog extends Component {
    /* constructor(props) {
         super(props);
 
     } */


     render() {
        return (
           <>
<section className="breadcrumb-area bg-img bg-gradient-overlay jarallax" style={{backgroundImage: "url(../img/bg-img/37.jpg)"}}>
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <h2 className="page-title">Blog Details</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section className="confer-blog-details-area section-padding-100-0">
        <div className="container">
            <div className="row justify-content-center">
              
                <div className="col-12 col-lg-8 col-xl-9">
                    <div className="pr-lg-4 mb-100">
                       
                        <div className="post-details-content">

                           
                            <div className="post-blog-thumbnail mb-30">
                                <img src="../img/bg-img/46.jpg" alt=""/>
                            </div>

                           
                            <h4 className="post-title">BW Education Leadership Summit</h4>

                        
                            <div className="post-meta">
                                <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                                <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i> Laura Green</a>
                                <a className="post-author" href="#/"><i className="zmdi zmdi-favorite-outline"></i> 8 Likes</a>
                                <a className="post-author" href="#/"><i className="zmdi zmdi-comment-outline"></i> 12 Comments</a>
                            </div>

                            <p>BW Education Leadership Summit focuses on recognizing applauding the quality of education in India by uniting Institution leaders and regulators to explore how they can leverage technologies, strategies and Management tools with each other to help create a world className Institution. Bringing together the Gamut of Early Childhood Brands, K 12 Brands, Exceptional Schools, Engineering Colleges.</p>

                           
                            <blockquote className="confer-blockquote">
                                <h5>Colleges together, this pivotal event will feature high level dialogue and strategies as well as be a Platform to recognize and celebrate the Top Education Brands in the Country.</h5>
                            </blockquote>

                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>

                            <div className="row">
                                <div className="col-6">
                                    <img className="mb-30" src="../img/bg-img/51.jpg" alt=""/>
                                </div>
                                <div className="col-6">
                                    <img className="mb-30" src="../img/bg-img/52.jpg" alt=""/>
                                </div>
                            </div>

                            <h5>Marketing Analytics &amp; Insights Summit</h5>
                            <p>Beyond demonstrating that marketing really works, the right analytics strategies can provide insights that inspire impactful marketing decisions, leading to increased ROI and revenue growth. Join us for our Marketing Analytics &amp; Insights Summit for a two-day deep dive into how top companies are using big data and analytics to dramatically improve the efficiency and efficacy of their marketing mix.</p>
                        </div>

                        
                        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center">
                          
                            <div className="popular-tags d-flex align-items-center">
                                <p><i className="zmdi zmdi-label"></i></p>
                                <ul className="nav">
                                    <li><a href="#/">Conference</a></li>
                                    <li><a href="#/">Workshops</a></li>
                                </ul>
                            </div>

                            
                            <div className="author-social-info">
                                <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                                <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                                <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                                <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                                <a href="#/"><i className="zmdi zmdi-share"></i></a>
                            </div>
                        </div>

                       
                        <div className="post-author-area d-flex align-items-center my-5">
                           
                            <div className="author-avatar">
                                <img src="../img/bg-img/53.jpg" alt=""/>
                            </div>
                           
                            <div className="author-content">
                                <h5>Frances Alvarado</h5>
                                <span>UX Manager</span>
                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing</p>
                            </div>
                        </div>

                        
                        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
                            
                            <div className="pager-single-post d-flex align-items-center">
                                <div className="post-thumb">
                                    <a href="#/"><img src="../img/bg-img/54.jpg" alt=""/></a>
                                </div>
                                <div className="post-meta">
                                    <a href="#/" className="post-title">Strategic Planning</a>
                                    <span>Previous Post</span>
                                </div>
                            </div>

                           
                            <div className="pager-single-post d-flex align-items-center">
                                <div className="post-thumb">
                                    <a href="#/"><img src="../img/bg-img/55.jpg" alt=""/></a>
                                </div>
                                <div className="post-meta">
                                    <a href="#/" className="post-title">Petroleum Refining</a>
                                    <span>Next Post</span>
                                </div>
                            </div>
                        </div>

                       
                        <div className="comment-area mb-80">
                           
                            <div className="comment_area clearfix">
                                <h4 className="mb-30">Comments</h4>

                                <ol>
                                    
                                    <li className="single_comment_area">
                                    
                                        <div className="comment-content d-flex">
                                          
                                            <div className="comment-author">
                                                <img src="../img/bg-img/56.jpg" alt="author"/>
                                            </div>
                                           
                                            <div className="comment-meta">
                                                <div className="comment-meta-data">
                                                    <a href="#/">Beverly Price</a>
                                                    <span><i className="zmdi zmdi-calendar-check"></i> June 28, 2019 at 3:18 pm</span>
                                                </div>
                                                <p>Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low.</p>
                                                <a href="#/" className="reply"><i className="zmdi zmdi-mail-reply"></i> Reply</a>
                                            </div>
                                        </div>

                                        <ol className="children">
                                            <li className="single_comment_area">
                                              
                                                <div className="comment-content d-flex">
                                                   
                                                    <div className="comment-author">
                                                        <img src="../img/bg-img/57.jpg" alt="author"/>
                                                    </div>
                                                   
                                                    <div className="comment-meta">
                                                        <div className="comment-meta-data">
                                                            <a href="#/">Jacqueline Watkins</a>
                                                            <span><i className="zmdi zmdi-calendar-check"></i> June 28, 2019 at 3:18 pm</span>
                                                        </div>
                                                        <p>Familiar with yoga for more than 4 years, now for me, yoga is like the flesh and blood, so I don't want to miss any practice.</p>
                                                        <a href="#/" className="reply"><i className="zmdi zmdi-mail-reply"></i> Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>

                                    
                                    <li className="single_comment_area">
                                       
                                        <div className="comment-content d-flex">
                                            
                                            <div className="comment-author">
                                                <img src="../img/bg-img/58.jpg" alt="author"/>
                                            </div>
                                           
                                            <div className="comment-meta">
                                                <div className="comment-meta-data">
                                                    <a href="#/">Lori Gonzales</a>
                                                    <span><i className="zmdi zmdi-calendar-check"></i> June 28, 2019 at 3:18 pm</span>
                                                </div>
                                                <p>Yoga gives me inner calm, controls emotions, escapes anger, especially stamina, strong physical strength from the inside.</p>
                                                <a href="#/" className="reply"><i className="zmdi zmdi-mail-reply"></i> Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                    
                        <div className="confer-leave-a-reply-form clearfix">
                            <h4 className="mb-30">Leave A Comment</h4>
                            

                            <div className="contact_form">
                                <form >
                                    <div className="contact_input_area">
                                        <div className="row">
                                           
                                            <div className="col-12 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control mb-30" name="name" id="name" placeholder="Your Name" required/>
                                                </div>
                                            </div>
                                          
                                            <div className="col-12 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control mb-30" name="name" id="name-2" placeholder="Last Name" required/>
                                                </div>
                                            </div>
                                           
                                            <div className="col-12 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control mb-30" name="email" id="email" placeholder="E-mail" required/>
                                                </div>
                                            </div>
                                          
                                            <div className="col-12 col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control mb-30" name="subject" id="subject" placeholder="Your Phone Number" required/>
                                                </div>
                                            </div>
                                           
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control mb-30" id="message" cols="30" rows="6" placeholder="Message" required></textarea>
                                                </div>
                                            </div>
                                           
                                            <div className="col-12">
                                                <button type="submit" className="btn confer-btn">Send Message <i className="zmdi zmdi-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="confer-sidebar-area mb-100">

                       
                        <div className="single-widget-area">
                            <div className="search-widget">
                                <form >
                                    <input type="search" name="search-form" id="searchForm" placeholder="Search" required/>
                                    <button type="submit"><i className="zmdi zmdi-search"></i></button>
                                </form>
                            </div>
                        </div>

                        
                        <div className="single-widget-area">
                            
                            <div className="post-author-widget">
                                
                                <div className="post-author-avatar">
                                    <img src="../img/bg-img/50.jpg" alt=""/>
                                </div>
                               
                                <div className="post-author-content">
                                    <h5>Crystal Perkins</h5>
                                    <span>Photographer</span>
                                    <p>On the other hand, de-nounce with righteous</p>
                                </div>
                                
                                <div className="author-social-info">
                                    <a href="#/"><i className="zmdi zmdi-facebook"></i></a>
                                    <a href="#/"><i className="zmdi zmdi-instagram"></i></a>
                                    <a href="#/"><i className="zmdi zmdi-twitter"></i></a>
                                    <a href="#/"><i className="zmdi zmdi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        
                        <div className="single-widget-area">
                            <h5 className="widget-title mb-30">Recent News</h5>

                            <div className="single-recent-post-area d-flex align-items-center">
                                
                                <div className="post-thumb">
                                    <a href="single-blog.html"><img src="../img/bg-img/47.jpg" alt=""/></a>
                                </div>
                                
                                <div className="post-content">
                                    <a href="#/" className="post-title">Los Angeles Institute</a>
                                    <a href="#/" className="post-date"><i className="zmdi zmdi-time"></i> January 14, 2019</a>
                                </div>
                            </div>

                            
                            <div className="single-recent-post-area d-flex align-items-center">
                                
                                <div className="post-thumb">
                                    <a href="#/"><img src="../img/bg-img/48.jpg" alt=""/></a>
                                </div>
                               
                                <div className="post-content">
                                    <a href="#/" className="post-title">Basel Peace Forum</a>
                                    <a href="#/" className="post-date"><i className="zmdi zmdi-time"></i> January 14, 2019</a>
                                </div>
                            </div>

                            
                            <div className="single-recent-post-area d-flex align-items-center">
                                
                                <div className="post-thumb">
                                    <a href="#/"><img src="../img/bg-img/49.jpg" alt=""/></a>
                                </div>
                                
                                <div className="post-content">
                                    <a href="#/" className="post-title">Global Goals Mun</a>
                                    <a href="#/" className="post-date"><i className="zmdi zmdi-time"></i> January 14, 2019</a>
                                </div>
                            </div>
                        </div>

                       
                        <div className="single-widget-area">
                            <h5 className="widget-title mb-30">Categories</h5>

                            
                            <ul className="categories-list">
                                <li><a href="#/">Technology <span>(5)</span></a></li>
                                <li><a href="#/">Medical <span>(7)</span></a></li>
                                <li><a href="#/">Conference <span>(3)</span></a></li>
                                <li><a href="#/">Workshops <span>(10)</span></a></li>
                                <li><a href="#/">Event <span>(12)</span></a></li>
                                <li><a href="#/">Progress <span>(4)</span></a></li>
                            </ul>
                        </div>

                        
                        <div className="single-widget-area">
                            <h5 className="widget-title mb-30">Tag Cloud</h5>

                            
                            <ul className="tag-cloud">
                                <li><a href="#/">Speakears</a></li>
                                <li><a href="#/">Business</a></li>
                                <li><a href="#/">Conference</a></li>
                                <li><a href="#/">Digital</a></li>
                            </ul>
                        </div>

                       
                        <div className="single-widget-area">
                            <h5 className="widget-title mb-30">Gallery</h5>

                            
                            <div className="sidebar-gallery">
                                <div className="row">
                                    <div className="col-4">
                                        <a href="#/"><img src="../img/bg-img/21.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#/"><img src="../img/bg-img/22.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#/"><img src="../img/bg-img/23.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#/"><img src="../img/bg-img/24.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#/"><img src="../img/bg-img/25.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#/"><img src="../img/bg-img/26.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
           </>
            )
        }
    }