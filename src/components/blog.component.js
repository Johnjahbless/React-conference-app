import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Blog extends Component {
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
                        <h2 className="page-title">Blog</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
            <div className="our-blog-area section-padding-100">
            <div className="container">
                <div className="row">
                    
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                            
                            <div className="single-blog-thumb">
                                <img src="img/bg-img/18.jpg" alt=""/>
                            </div>
                            <div className="single-blog-text text-center">
                                <Link className="blog-title" to="/blog/details">Street Food Convention</Link>
                            
                                <div className="post-meta">
                                    <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                                    <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i> Laura Green</a>
                                </div>
                                <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                            </div>
                            <div className="blog-btn">
                                <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
    
                    
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                            
                            <div className="single-blog-thumb">
                                <img src="img/bg-img/19.jpg" alt=""/>
                            </div>
                            <div className="single-blog-text text-center">
                                <Link className="blog-title" to="/blog/details">Tedx Moscow Conference</Link>
                                
                                <div className="post-meta">
                                    <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                    <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                </div>
                                <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                            </div>
                            <div className="blog-btn">
                                <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
    
                   
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                            
                            <div className="single-blog-thumb">
                                <img src="img/bg-img/20.jpg" alt=""/>
                            </div>
                            <div className="single-blog-text text-center">
                                <Link className="blog-title" to="/blog/details">Los Angeles Institute</Link>
                               
                                <div className="post-meta">
                                    <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                    <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                </div>
                                <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                            </div>
                            <div className="blog-btn">
                                <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                            
                            <div className="single-blog-thumb">
                                <img src="img/bg-img/18.jpg" alt=""/>
                            </div>
                            <div className="single-blog-text text-center">
                                <Link className="blog-title" to="/blog/details">Street Food Convention</Link>
                               
                                <div className="post-meta">
                                    <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                                    <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i> Laura Green</a>
                                </div>
                                <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                            </div>
                            <div className="blog-btn">
                                <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
    
                   
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                            
                            <div className="single-blog-thumb">
                                <img src="img/bg-img/19.jpg" alt=""/>
                            </div>
                            <div className="single-blog-text text-center">
                                <Link className="blog-title" to="/blog/details">Tedx Moscow Conference</Link>
                                
                                <div className="post-meta">
                                    <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                    <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                </div>
                                <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                            </div>
                            <div className="blog-btn">
                                <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
    
                   
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                           
                            <div className="single-blog-thumb">
                                <img src="img/bg-img/20.jpg" alt=""/>
                            </div>
                            <div className="single-blog-text text-center">
                                <Link className="blog-title" to="/blog/details">Los Angeles Institute</Link>
                            
                                <div className="post-meta">
                                    <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                    <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                </div>
                                <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                            </div>
                            <div className="blog-btn">
                                <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                            
                            <div className="single-blog-thumb">
                                <img src="img/bg-img/18.jpg" alt=""/>
                            </div>
                            <div className="single-blog-text text-center">
                                <Link className="blog-title" to="/blog/details">Street Food Convention</Link>
                                
                                <div className="post-meta">
                                    <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                                    <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i> Laura Green</a>
                                </div>
                                <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                            </div>
                            <div className="blog-btn">
                                <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
    
                    
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                           
                            <div className="single-blog-thumb">
                                <img src="img/bg-img/19.jpg" alt=""/>
                            </div>
                            <div className="single-blog-text text-center">
                                <Link className="blog-title" to="/blog/details">Tedx Moscow Conference</Link>
                                
                                <div className="post-meta">
                                    <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                    <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                </div>
                                <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                            </div>
                            <div className="blog-btn">
                                <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
    
                    
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">
                           
                            <div className="single-blog-thumb">
                                <img src="img/bg-img/20.jpg" alt=""/>
                            </div>
                            <div className="single-blog-text text-center">
                                <Link className="blog-title" to="/blog/details">Los Angeles Institute</Link>
                                
                                <div className="post-meta">
                                    <a className="post-date" href="#/"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                    <a className="post-author" href="#/"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                </div>
                                <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                            </div>
                            <div className="blog-btn">
                                <Link to="/blog/details"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col-12">
                        <div className="more-blog-btn text-center">
                            <Link className="btn confer-btn" to="/blog/details">Load more <i className="zmdi zmdi-refresh"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
            )
        }
    }