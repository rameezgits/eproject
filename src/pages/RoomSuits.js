import React from 'react'
import Header from '../components/Header'
import { useEffect } from 'react';

const RoomSuits = () => {
  useEffect(() => {
    document.title = "Hoexr | Rooms & Suits"
}, []);
  return (
    <div>
      <Header pageTitle="Rooms & Suits" />
      <section class="feature-section">
        <div class="auto-container">
          <div class="row feature-row g-0 wow slideInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animatioName: 'slideInUp' }}>
            <div class="image-column col-lg-4 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image-box">
                  <figure class="image overlay-anim"><img src="images/resource/feature-1.jpg" alt="" /></figure>
                </div>
              </div>
            </div>
            <div class="content-column col-lg-8 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="content-box">
                  <div class="sec-title">
                    <span class="sub-title">MODERN</span>
                    <h2>Fitness Center</h2>
                    <div class="text">Restaurant inilla duiman at elit finibus viverra nec a lacus themo the <br />nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru <br />the ivite dianne onen nivami acsestion augue artine.</div>
                  </div>
                  <a href="room-details.html" class="theme-btn btn-style-one read-more">Discover More</a>
                  <figure class="image-2"><img src="images/resource/icon.png" alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
          <div class="row feature-row g-0 wow slideInUp animated" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animatioName: 'slidedInUp' }}>
            <div class="content-column col-lg-8 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="content-box">
                  <div class="sec-title">
                    <span class="sub-title">DISCOVER</span>
                    <h2>The Restaurant</h2>
                    <div class="text">Restaurant inilla duiman at elit finibus viverra nec a
                      lacus themo the <br />nesudea seneoice misuscipit non sagie the fermen
                      ziverra tristiue duru <br />the ivite dianne onen nivami acsestion augue artine.</div>
                  </div>
                  <a href="room-details.html" class="theme-btn btn-style-one read-more">Discover More</a>
                  <figure class="image-2"><img src="images/resource/icon-2.png" alt="" /></figure>
                </div>
              </div>
            </div>
            <div class="image-column col-lg-4 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image-box">
                  <figure class="image overlay-anim"><img src="images/resource/feature-2.jpg" alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
          <div class="row feature-row g-0 wow slideInUp" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animatioName: 'none' }}>
            <div class="image-column col-lg-4 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="image-box">
                  <figure class="image overlay-anim"><img src="images/resource/feature-3.jpg" alt="" /></figure>
                </div>
              </div>
            </div>
            <div class="content-column col-lg-8 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="content-box">
                  <div class="sec-title">
                    <span class="sub-title">EXPERIENCES</span>
                    <h2>Spa Center</h2>
                    <div class="text">Restaurant inilla duiman at elit finibus viverra nec a
                      lacus themo the <br />nesudea seneoice misuscipit non sagie the fermen
                      ziverra tristiue duru <br />the ivite dianne onen nivami acsestion augue artine.</div>
                  </div>
                  <a href="room-details.html" class="theme-btn btn-style-one read-more">Discover More</a>
                  <figure class="image-2"><img src="images/resource/icon-3.png" alt="" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default RoomSuits
