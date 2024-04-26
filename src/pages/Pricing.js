import React from 'react'
import Header from '../components/Header'

const Pricing = () => {
    return (
        <div>
            <Header pageTitle="About Us" />
            <section class="pricing-section-two">
                <div class="auto-container">
                    <div class="row">

                        <div class="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="row">
                                    <div class="content-column col-lg-4 col-md-6 col-sm-12">
                                        <div class="inner-column wow fadeInLeft animated" style={{visibility: 'visible', animatioName: 'fadeInLeft'}}>
                                            <h6 class="title">$200<span> / Night</span></h6>
                                            <span>Single Room</span>
                                            <ul class="list-style-two">
                                                <li><i class="icon fa fa-circle-check"></i>Pick &amp; Drop Service</li>
                                                <li><i class="icon fa fa-circle-check"></i>Swimming Pool</li>
                                                <li><i class="icon fa fa-circle-check"></i>City Tour Guide</li>
                                                <li><i class="icon fa fa-circle-check"></i>Fibre Internet</li>
                                            </ul>
                                            <a href="#" class="book-now">Book Now</a> </div>
                                    </div>
                                    <div class="image-column col-lg-8 col-md-6 col-sm-12">
                                        <div class="image-box">
                                            <figure class="image wow fadeInUp animated" style={{visibility: 'visible', animatioName: 'fadeInLeft'}}><img src="images/resource/pricing2-1.jpg" alt=""/></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div class="inner-box">
                                <div class="row">
                                    <div class="content-column col-lg-4 col-md-6 col-sm-12">
                                        <div class="inner-column wow fadeInLeft animated" style={{visibility: 'visible', animatioName: 'fadeInLeft'}}>
                                            <h6 class="title">$250<span> / Night</span></h6>
                                            <span>Double Room</span>
                                            <ul class="list-style-two">
                                                <li><i class="icon fa fa-circle-check"></i>Pick &amp; Drop Service</li>
                                                <li><i class="icon fa fa-circle-check"></i>Swimming Pool</li>
                                                <li><i class="icon fa fa-circle-check"></i>City Tour Guide</li>
                                                <li><i class="icon fa fa-circle-check"></i>Fibre Internet</li>
                                            </ul>
                                            <a href="#" class="book-now">Book Now</a> </div>
                                    </div>
                                    <div class="image-column col-lg-8 col-md-6 col-sm-12">
                                        <div class="image-box">
                                            <figure class="image wow fadeInUp animated" style={{visibility: 'visible', animatioName: 'fadeInUp'}}><img src="images/resource/pricing2-2.jpg" alt=""/></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Pricing
