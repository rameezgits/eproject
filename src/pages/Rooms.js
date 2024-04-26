import React from 'react'
import Header from '../components/Header'

const Rooms = () => {
    return (
        <div>
            <Header pageTitle="Rooms" />
            <section class="rooms-section pb-100">
                <div class="auto-container">
                    <div class="row">

                        <div class="room-block col-lg-6 col-md-6">
                            <div class="inner-box wow fadeIn" style={{visibility: 'visible'}}>
                                <div class="image-box">
                                    <figure class="image-2 overlay-anim"><img src="images/resource/room-1.jpg" alt=""/></figure>
                                </div>
                                <div class="content-box">
                                    <h6 class="title"><a href="room-details.html">Junior Suite</a></h6>
                                    <span class="price">150$ / NIGHT</span>
                                </div>
                                <div class="box-caption">
                                    <a href="room-details.html" title="" class="book-btn">book now</a>
                                    <ul class="bx-links">
                                        <li><a href="room-details.html" title=""><i class="fa fa-wifi"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bed"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bath"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-shower"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="room-block col-lg-6 col-md-6">
                            <div class="inner-box wow fadeIn" data-wow-delay="200ms" style={{visibility: 'visible'}}>
                                <div class="image-box">
                                    <figure class="image-2 overlay-anim"><img src="images/resource/room-2.jpg" alt=""/></figure>
                                </div>
                                <div class="content-box">
                                    <h6 class="title"><a href="room-details.html">Family Room</a></h6>
                                    <span class="price">200$ / NIGHT</span>
                                </div>
                                <div class="box-caption">
                                    <a href="room-details.html" title="" class="book-btn">book now</a>
                                    <ul class="bx-links">
                                        <li><a href="room-details.html" title=""><i class="fa fa-wifi"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bed"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bath"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-shower"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="room-block col-lg-3 col-md-6">
                            <div class="inner-box wow fadeIn" data-wow-delay="300ms"style={{visibility: 'visible'}}>
                                <div class="image-box">
                                    <figure class="image-2 overlay-anim"><img src="images/resource/room-3.jpg" alt=""/></figure>
                                </div>
                                <div class="content-box">
                                    <h6 class="title"><a href="room-details.html">Double Room</a></h6>
                                    <span class="price">250$ / NIGHT</span>
                                </div>
                                <div class="box-caption">
                                    <a href="room-details.html" title="" class="book-btn">book now</a>
                                    <ul class="bx-links">
                                        <li><a href="room-details.html" title=""><i class="fa fa-wifi"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bed"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bath"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-shower"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="room-block col-lg-6 col-md-6">
                            <div class="inner-box large-style wow fadeIn" data-wow-delay="400ms" style={{visibility: 'visible'}}>
                                <div class="image-box">
                                    <figure class="image-2 overlay-anim"><img src="images/resource/room-4.jpg" alt=""/></figure>
                                </div>
                                <div class="content-box">
                                    <h6 class="title"><a href="room-details.html">Double Room</a></h6>
                                    <span class="price">250$ / NIGHT</span>
                                </div>
                                <div class="box-caption">
                                    <a href="room-details.html" title="" class="book-btn">book now</a>
                                    <ul class="bx-links">
                                        <li><a href="room-details.html" title=""><i class="fa fa-wifi"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bed"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bath"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-shower"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="room-block col-lg-3 col-md-6">
                            <div class="inner-box wow fadeIn" data-wow-delay="500ms" style={{visibility: 'visible'}}>
                                <div class="image-box">
                                    <figure class="image-2 overlay-anim"><img src="images/resource/room-5.jpg" alt=""/></figure>
                                </div>
                                <div class="content-box">
                                    <h6 class="title"><a href="room-details.html">Deluxe Room</a></h6>
                                    <span class="price">300$ / NIGHT</span>
                                </div>
                                <div class="box-caption">
                                    <a href="room-details.html" title="" class="book-btn">book now</a>
                                    <ul class="bx-links">
                                        <li><a href="room-details.html" title=""><i class="fa fa-wifi"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bed"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-bath"></i></a></li>
                                        <li><a href="room-details.html" title=""><i class="fa fa-shower"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Rooms
