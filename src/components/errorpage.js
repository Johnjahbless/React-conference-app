import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class ErrorPage extends Component {
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
                        <h2 className="page-title">Error 404</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Error 404</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="our-schedule-area bg-white section-padding-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="schedule-tab">

                        <h2 className="title" style={{textAlign:"center", color:"red"}}>The    nbhjhjpage you're looking for doesn't exit on this server</h2>

                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
            </>
            )
        }
    }