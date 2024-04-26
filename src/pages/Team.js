import React from 'react'
import Header from '../components/Header'

const Team = () => {
  return (
    <div>
      <Header pageTitle="Our Team" />
      <section class="team-section bg-light">
        <div class="auto-container">
          <div class="row">

            <div class="team-block col-lg-3 col-sm-6">
              <div class="inner-box wow fadeInLeft animated" style={{ visibility: 'visible', animatioName: 'fadeInLeft' }}>
                <div class="image-box">
                  <figure class="image overlay-anim"><a href="page-team-details.html"><img src="images/resource/team-1.jpg" alt="" /></a></figure>
                  <div class="info-box">
                    <span class="designation">Event Platnner</span>
                    <h4 class="name"><a href="page-team-details.html">Michael Dean</a></h4>
                    <div class="social-links">
                      <a href="#"><i class="fab fa-facebook"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="#"><i class="fab fa-linkedin"></i></a>
                      <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="team-block col-lg-3 col-sm-6">
              <div class="inner-box wow fadeInLeft animated" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animatioName: 'fadeInLeft' }}>
                <div class="image-box">
                  <figure class="image overlay-anim"><a href="page-team-details.html"><img src="images/resource/team-2.jpg" alt="" /></a></figure>
                  <div class="info-box">
                    <span class="designation">Kitchen Manager</span>
                    <h4 class="name"><a href="page-team-details.html">Frank Burton</a></h4>
                    <div class="social-links">
                      <a href="#"><i class="fab fa-facebook"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="#"><i class="fab fa-linkedin"></i></a>
                      <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="team-block col-lg-3 col-sm-6">
              <div class="inner-box wow fadeInLeft animated" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animatioName: 'fadeInRight' }}>
                <div class="image-box">
                  <figure class="image overlay-anim"><a href="page-team-details.html"><img src="images/resource/team-3.jpg" alt="" /></a></figure>
                  <div class="info-box">
                    <span class="designation">Hotel Manager</span>
                    <h4 class="name"><a href="page-team-details.html">Mya Mullins</a></h4>
                    <div class="social-links">
                      <a href="#"><i class="fab fa-facebook"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="#"><i class="fab fa-linkedin"></i></a>
                      <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="team-block col-lg-3 col-sm-6">
              <div class="inner-box wow fadeInLeft animated" data-wow-delay="400ms" style={{ visibility: 'visible', animationDelay: '400ms', animatioName: 'fadeInLeft' }}>
                <div class="image-box">
                  <figure class="image overlay-anim"><a href="page-team-details.html"><img src="images/resource/team-4.jpg" alt="" /></a></figure>
                  <div class="info-box">
                    <span class="designation">Room Service</span>
                    <h4 class="name"><a href="page-team-details.html">Ralph Nguyen</a></h4>
                    <div class="social-links">
                      <a href="#"><i class="fab fa-facebook"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="#"><i class="fab fa-linkedin"></i></a>
                      <a href="#"><i class="fab fa-youtube"></i></a>
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

export default Team
