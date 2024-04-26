import React from 'react'
import Header from '../components/Header'
const Home = () => {
  return (
    <div>
      <section class="banner-section-two">
            <div class="banner-slider">
                <div class="banner-slide-v2">
                    <div class="outer-box">
                        <figure class="image wow fadeInUp"><img src="images/banner/banner-2.jpg" alt/></figure>
                        <div class="content-box">
                            <span class="sub-title" data-animation-in="fadeInUp" data-delay-in="0.1">unique place and
                                luxury hotel</span>
                            <h1 data-animation-in="fadeInUp" data-delay-in="0.3">life enjoy with <br/>the great moments
                            </h1>
                            <a href="page-about.html" class="btn" data-animation-in="fadeInUp" data-delay-in="0.5">rooms
                                & suites</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="checkout-form-section v2 wow slideInUp">
            <div class="auto-container">
                <div class="checkout-form">
                    <div class="checkout-field">
                        <h6>Check in</h6>
                        <div class="chk-field">
                            <input class="date-pick" type="text" placeholder="20 June, 2023" />
                            <i class="fa fa-calendar"></i>
                        </div>
                    </div>
                    <div class="checkout-field">
                        <h6>Check out</h6>
                        <div class="chk-field">
                            <input class="date-pick" type="text" placeholder="20 June, 2023" />
                            <i class="fa fa-calendar"></i>
                        </div>
                    </div>
                    <div class="checkout-field br-0">
                        <h6>Room</h6>
                        <div class="chk-field">
                            <i class="fa fa-angle-down"></i>
                            <select>
                                <option>Standard Room Size </option>
                                <option>Standard Room Size </option>
                                <option>Standard Room Size </option>
                                <option>Standard Room Size </option>
                            </select>
                        </div>
                    </div>
                    <a href class="theme-btn btn-style-one"><span class="btn-title">check now</span></a>
                </div>
            </div>
        </div>

        <section class="about-section-two">
            <div class="auto-container">
                <div class="row">

                    <div class="content-column col-lg-7 wow fadeInRight" data-wow-delay="600ms">
                        <div class="inner-column">
                            <div class="sec-title">
                                <span class="sub-title">Hoexr Luxury Hotel</span>
                                <h2>We Provide Outdoor <br/>Activities To All Visitors</h2>
                                <div class="text">San Francisco has hills with views, the coast, excellent food &
                                    <br/>has been voted the happiest, healthiest and fittest city in the <br/>States many
                                    times.</div>
                            </div>
                            <div class="outer-box">
                                <div class="info-block">
                                    <div class="inner">
                                        <div class="icon-box"><i class="flaticon-light"></i></div>
                                        <h4 class="title">The Best <br/>Lighting</h4>
                                    </div>
                                </div>
                                <div class="info-block">
                                    <div class="inner">
                                        <div class="icon-box"><i class="flaticon-pool"></i></div>
                                        <h4 class="title">The Best <br/>Swiming</h4>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-style-two">
                                <li><i class="icon fa fa-circle-check"></i>It is a long fact that a reader will be
                                    distracted by the readable</li>
                                <li><i class="icon fa fa-circle-check"></i>Lorem Ipsum is simply dummy of the printing
                                    and industry</li>
                                <li><i class="icon fa fa-circle-check"></i>There are many variations of Lorem Ipsum
                                    majority</li>
                            </ul>
                            <div class="btn-box">
                                <a href="page-about.html" class="theme-btn btn-style-one"><span
                                        class="btn-title">Discover More</span></a>
                            </div>
                        </div>
                    </div>

                    <div class="image-column col-lg-5">
                        <div class="inner-column wow fadeInLeft">
                            <figure class="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about2-1.jpg"
                                    alt/></figure>
                            <figure class="image-2 overlay-anim wow fadeInLeft"><img src="images/resource/about2-2.jpg"
                                    alt/></figure>
                            <div class="exp-box bounce-y">
                                <figure class=" overlay-anim wow fadeInLeft"><img src="images/resource/exp-icon.png"
                                        alt/></figure>
                                <h4 class="title">Luxury Room</h4>
                                <div class="text">Donec in quis the asd <br/>pellentesque velit. Donec id <br/>velit arcu
                                    posuere blane.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="service-section-two">
            <div class="auto-container">
                <div class="sec-title text-center wow fadeInUp"> <span class="sub-title">Hoexr SERVICES</span>
                    <h2>Hotel Facilities</h2>
                </div>
                <div class="row">

                    <div class="service-block-two col-lg-4 col-sm-6">
                        <div class="inner-box wow fadeInLeft">
                            <div class="image-box">
                                <div class="icon-box wow fadeInUp"><i class="flaticon-bed-2"></i></div>
                                <h4 class="title"><a href="page-service-details.html">Room Service</a></h4>
                            </div>
                            <div class="content-box">
                                <div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-block-two col-lg-4 col-sm-6">
                        <div class="inner-box wow fadeInLeft" data-wow-delay="200ms">
                            <div class="image-box">
                                <div class="icon-box wow fadeInUp"><i class="flaticon-swimming-pool"></i></div>
                                <h4 class="title"><a href="page-service-details.html">Swimming Pool</a></h4>
                            </div>
                            <div class="content-box">
                                <div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-block-two col-lg-4 col-sm-6">
                        <div class="inner-box wow fadeInLeft" data-wow-delay="300ms">
                            <div class="image-box">
                                <div class="icon-box wow fadeInUp"><i class="flaticon-car"></i></div>
                                <h4 class="title"><a href="page-service-details.html">Parking Space</a></h4>
                            </div>
                            <div class="content-box">
                                <div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-block-two col-lg-4 col-sm-6">
                        <div class="inner-box wow fadeInLeft" data-wow-delay="400ms">
                            <div class="image-box">
                                <div class="icon-box wow fadeInUp"><i class="flaticon-breakfast"></i></div>
                                <h4 class="title"><a href="page-service-details.html">Breakfast</a></h4>
                            </div>
                            <div class="content-box">
                                <div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-block-two col-lg-4 col-sm-6">
                        <div class="inner-box wow fadeInLeft" data-wow-delay="500ms">
                            <div class="image-box">
                                <div class="icon-box wow fadeInUp"><i class="flaticon-travel"></i></div>
                                <h4 class="title"><a href="page-service-details.html">Pick Up & Drop</a></h4>
                            </div>
                            <div class="content-box">
                                <div class="text">Orci varius natoque penatibus magnis ders disney parturient ridiculus
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-block-two col-lg-4 col-sm-6">
                        <div class="inner-box-two wow fadeInLeft" data-wow-delay="600ms">
                            <div class="image-box">
                                <figure class="image wow fadeInUp overlay-anim"><img
                                        src="images/resource/service2-1.jpg" alt/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="pricing-section-two">
            <div class="auto-container">
                <div class="sec-title text-center"> <span class="sub-title">Best price</span>
                    <h2>The Best Luxury Rooms <br/> And Suites</h2>
                </div>
                <div class="row">

                    <div class="pricing-block-two col-sm-6">
                        <div class="inner-box">
                            <div class="row">
                                <div class="content-column col-lg-4 col-md-6">
                                    <div class="inner-column wow fadeInLeft">
                                        <h6 class="title">$200<span> / Night</span></h6>
                                        <span>Single Room</span>
                                        <ul class="list-style-two">
                                            <li><i class="icon fa fa-circle-check"></i>Pick & Drop Service</li>
                                            <li><i class="icon fa fa-circle-check"></i>Swimming Pool</li>
                                            <li><i class="icon fa fa-circle-check"></i>City Tour Guide</li>
                                            <li><i class="icon fa fa-circle-check"></i>Fibre Internet</li>
                                        </ul>
                                        <a href="page-pricing.html" class="book-now">Book Now</a>
                                    </div>
                                </div>
                                <div class="image-column col-lg-8 col-md-6">
                                    <div class="image-box">
                                        <figure class="image wow fadeInUp"><img src="images/resource/pricing2-1.jpg"
                                                alt/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pricing-block-two col-sm-6">
                        <div class="inner-box">
                            <div class="row">
                                <div class="content-column col-lg-4 col-md-6">
                                    <div class="inner-column wow fadeInLeft">
                                        <h6 class="title">$250<span> / Night</span></h6>
                                        <span>Double Room</span>
                                        <ul class="list-style-two">
                                            <li><i class="icon fa fa-circle-check"></i>Pick & Drop Service</li>
                                            <li><i class="icon fa fa-circle-check"></i>Swimming Pool</li>
                                            <li><i class="icon fa fa-circle-check"></i>City Tour Guide</li>
                                            <li><i class="icon fa fa-circle-check"></i>Fibre Internet</li>
                                        </ul>
                                        <a href="page-pricing.html" class="book-now">Book Now</a>
                                    </div>
                                </div>
                                <div class="image-column col-lg-8 col-md-6">
                                    <div class="image-box">
                                        <figure class="image wow fadeInUp"><img src="images/resource/pricing2-2.jpg"
                                                alt/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="food-section pt-0">
            <div class="auto-container">
                <div class="row">
                    <div class="image-column col-xl-4 col-lg-4">
                        <div class="inner-column">
                            <div class="image-box">
                                <figure class="image wow fadeInUp"><img src="images/resource/food-1.jpg" alt/></figure>
                            </div>
                            <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" class="play-now-two"
                                data-fancybox="gallery" data-caption> <i class="icon fa fa-play" aria-hidden="true"></i>
                                <span class="ripple"></span> </a>
                            <div class="quote-box">
                                <div class="icon-box"><i class="flaticon-quotation"></i></div>
                                <div class="text">Great hospitality is the key to Pride of Britain’s longstanding
                                    reputation for excellence.</div>
                            </div>
                        </div>
                    </div>
                    <div class="content-column col-xl-8">
                        <div class="inner-column">
                            <div class="sec-title"> <span class="sub-title">EAT FROM THE LAND</span>
                                <h2>Enjoy Food and Even<br/>
                                    Better Hospitality</h2>
                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt<br/>
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                                    commodo <br/>
                                    viverra maecenas accumsan lacus vel facilisis. </div>
                                <div class="healthy-food">
                                    <div class="food-list">
                                        <h4 class="title">Restaurant</h4>
                                        <ul>
                                            <li><i class="fa-regular fa-square-check"></i>Healthy Food</li>
                                            <li><i class="fa-regular fa-square-check"></i>Award-winning Restaurant</li>
                                            <li><i class="fa-regular fa-square-check"></i>Individually Styled Bedrooms
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="food-list two">
                                        <h4 class="title">SPA & Wellness</h4>
                                        <ul>
                                            <li><i class="fa-regular fa-square-check"></i>Healthy Food</li>
                                            <li><i class="fa-regular fa-square-check"></i>Award-winning Restaurant</li>
                                            <li><i class="fa-regular fa-square-check"></i>Individually Styled Bedrooms
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="image-box">
                                    <figure class="image overlay-anim"><img src="images/resource/food-list.jpg" alt/>
                                    </figure>
                                    <figure class="image overlay-anim"><img src="images/resource/food-list-2.jpg" alt/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="call-to-action pt-0">
            <div class="auto-container">
                <div class="row">
                    <div class="content-colum col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column wow fadeInLeft">
                            <div class="sec-title"> <span class="sub-title">Call to action</span>
                                <h2>The Thin Escape.</h2>
                            </div>

                            <div class="call-block">
                                <div class="inner-box">
                                    <div class="icon-box"> <i class="flaticon-airplane"></i> </div>
                                    <h4 class="title">Easy & Free Transport</h4>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                                        eiusmod tempor incididunt dolore magna aliqua.</div>
                                </div>
                            </div>

                            <div class="call-block">
                                <div class="inner-box">
                                    <div class="icon-box"> <i class="flaticon-fast-food"></i> </div>
                                    <h4 class="title">Clean & Fresh Food</h4>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                                        eiusmod tempor incididunt dolore magna aliqua.</div>
                                </div>
                            </div>

                            <div class="call-block">
                                <div class="inner-box">
                                    <div class="icon-box"> <i class="flaticon-swimming-pool-1"></i> </div>
                                    <h4 class="title">Play Ground & Swimming Pool</h4>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                                        eiusmod tempor incididunt dolore magna aliqua.</div>
                                </div>
                            </div>
                            <div class="btn-box"> <a href class="read-more">Book A Hotel</a> </div>
                        </div>
                    </div>
                    <div class="col-lg-6 booking-form-column">
                        <div class="inner-column wow fadeInRight" data-wow-delay="200ms">
                            <div class="sec-title"> <span class="sub-title">ROOMS & SUITES</span>
                                <h2>Hotel Booking </h2>
                            </div>
                            <form class="bk-form">
                                <div class="frm-field">
                                    <input type="text" name="check-in" class="date-pick" placeholder="Check in" />
                                    <img src="images/icons/mail.png" alt />
                                </div>
                                <div class="frm-field">
                                    <input type="text" name="check-in" class="date-pick" placeholder="Check out" />
                                    <img src="images/icons/mail.png" alt />
                                </div>
                                <div class="frm-field">
                                    <select>
                                        <option>Adult</option>
                                        <option>Adult</option>
                                        <option>Adult</option>
                                        <option>Adult</option>
                                    </select>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                                <div class="frm-field">
                                    <select>
                                        <option>Children</option>
                                        <option>Children</option>
                                        <option>Children</option>
                                        <option>Children</option>
                                    </select>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                                <div class="form-submit">
                                    <button type="submit">Check Availability</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="client-section">
            <div class="bg bg-image" style={{backgroundImage: 'url(images/background/3.jpg)'}}></div>
            <div class="auto-container">
                <div class="sec-title light text-center"> <span class="sub-title">What says for customer</span>
                    <h2>What Client's Say?</h2>
                </div>
                <div class="row">

                    <div class="client-block col-lg-4 col-sm-6">
                        <div class="inner-box wow fadeInLeft">
                            <h4 class="title">Jina Nillson</h4>
                            <span>Founder of Webflex</span>
                            <div class="image-box">
                                <figure class="image wow fadeInUp"><img src="images/resource/client.jpg" alt/></figure>
                                <i class="icon fa fa-circle-check"></i>
                            </div>
                            <div class="text">Upon they're seasons green day beast<br/>without form man be firmament
                                years shall<br/>the appear moveth signs had.</div>
                        </div>
                    </div>

                    <div class="client-block col-lg-4 col-sm-6">
                        <div class="inner-box wow fadeInLeft" data-wow-delay="200ms">
                            <h4 class="title">Donald Browfish</h4>
                            <span>Founder of Webflex</span>
                            <div class="image-box">
                                <figure class="image wow fadeInUp"><img src="images/resource/client-2.jpg" alt/></figure>
                                <i class="icon fa fa-circle-check"></i>
                            </div>
                            <div class="text">Upon they're seasons green day beast<br/>without form man be firmament
                                years shall<br/>the appear moveth signs had.</div>
                        </div>
                    </div>

                    <div class="client-block col-lg-4 col-sm-6">
                        <div class="inner-box wow fadeInLeft" data-wow-delay="300ms">
                            <h4 class="title">Robotor Doses</h4>
                            <span>Founder of Webflex</span>
                            <div class="image-box">
                                <figure class="image wow fadeInUp"><img src="images/resource/client-3.jpg" alt/></figure>
                                <i class="icon fa fa-circle-check"></i>
                            </div>
                            <div class="text">Upon they're seasons green day beast<br/>without form man be firmament
                                years shall<br/>the appear moveth signs had.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="offer-banner wow slideInUp">
            <div class="auto-container">
                <div class="outer-box">
                    <div class="row">

                        <div class="content-colum col-lg-8 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="content-box"> <span>Risus commodo viverra accumsan lacus vel facilisis.
                                    </span>
                                    <h6 class="title">Special Holiday Offer</h6>
                                </div>
                            </div>
                        </div>

                        <div class="btn-column col-lg-4 col-md-12 col-sm-12">
                            <div class="inner-column"> <a href="page-contact.html" class="read-more">Book Now</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="news-section-two">
            <div class="auto-container">
                <div class="sec-title text-center wow fadeInUp"> <span class="sub-title">Hoexr Hotel News</span>
                    <h2>Latest News Update</h2>
                </div>
                <div class="row">

                    <div class="news-block-two col-lg-4 col-sm-6 wow fadeInUp">
                        <div class="inner-box wow fadeInLeft">
                            <div class="image-box">
                                <figure class="image overlay-anim"><a href="news-details.html"><img
                                            src="images/resource/news2-1.jpg" alt/></a></figure>
                                <span class="date">DEC<br/>
                                    <small>20</small></span>
                            </div>
                            <div class="content-box">
                                <div class="info-box">
                                    <figure class="thumb"><a href="news-details.html"><img
                                                src="images/resource/news-thumb.jpg" alt/></a></figure>
                                    <span class="designation">Jonica Michel</span>
                                </div>
                                <h4 class="title"><a href="news-details.html">Retore Lighting Design <br/> in The
                                        Hotel</a></h4>
                                <div class="btn-box">
                                    <span><i class="icon fa fa-comments"></i>0 Comments</span>
                                    <a href="news-details.html" class="read-more">Read More<i
                                            class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="news-block-two col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div class="inner-box wow fadeInLeft" data-wow-delay="200ms">
                            <div class="image-box">
                                <figure class="image overlay-anim"><a href="news-details.html"><img
                                            src="images/resource/news-2.jpg" alt/></a></figure>
                                <span class="date">DEC<br/>
                                    <small>20</small></span>
                            </div>
                            <div class="content-box">
                                <div class="info-box">
                                    <figure class="thumb"><a href="news-details.html"><img
                                                src="images/resource/news-thumb.jpg" alt/></a></figure>
                                    <span class="designation">Jonica Michel</span>
                                </div>
                                <h4 class="title"><a href="news-details.html">Swiming Benefits is <br/> Good For Your
                                        Health</a></h4>
                                <div class="btn-box">
                                    <span><i class="icon fa fa-comments"></i>0 Comments</span>
                                    <a href="news-details.html" class="read-more">Read More<i
                                            class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="news-block-two col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div class="inner-box wow fadeInLeft" data-wow-delay="300ms">
                            <div class="image-box">
                                <figure class="image overlay-anim"><a href="news-details.html"><img
                                            src="images/resource/news-3.jpg" alt/></a></figure>
                                <span class="date">DEC<br/>
                                    <small>20</small></span>
                            </div>
                            <div class="content-box">
                                <div class="info-box">
                                    <figure class="thumb"><a href="news-details.html"><img
                                                src="images/resource/news-thumb.jpg" alt/></a></figure>
                                    <span class="designation">Jonica Michel</span>
                                </div>
                                <h4 class="title"><a href="news-details.html">Avalible Now Health <br/> Club For Your
                                        Fitness </a></h4>
                                <div class="btn-box">
                                    <span><i class="icon fa fa-comments"></i>0 Comments</span>
                                    <a href="news-details.html" class="read-more">Read More<i
                                            class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="client-section-two">
            <div class="auto-container">
                <div class="client-slider wow fadeInUp">

                    <div class="client-block-two">
                        <div class="inner-box">
                            <figure class="image"><a href><img src="images/resource/client1-1.png" alt/></a></figure>
                        </div>
                    </div>

                    <div class="client-block-two">
                        <div class="inner-box">
                            <figure class="image"><a href><img src="images/resource/client1-2.png" alt/></a></figure>
                        </div>
                    </div>

                    <div class="client-block-two">
                        <div class="inner-box">
                            <figure class="image"><a href><img src="images/resource/client1-3.png" alt/></a></figure>
                        </div>
                    </div>

                    <div class="client-block-two">
                        <div class="inner-box">
                            <figure class="image"><a href><img src="images/resource/client1-4.png" alt/></a></figure>
                        </div>
                    </div>

                    <div class="client-block-two">
                        <div class="inner-box">
                            <figure class="image"><a href><img src="images/resource/client1-5.png" alt/></a></figure>
                        </div>
                    </div>

                    <div class="client-block-two">
                        <div class="inner-box">
                            <figure class="image"><a href><img src="images/resource/client1-1.png" alt/></a></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    
  )
}

export default Home