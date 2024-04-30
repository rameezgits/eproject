import React from 'react'
import Header from '../components/Header'
import { useEffect } from 'react'

const Login = () => {
    useEffect(() => {
        document.title = "Hoexr | Login"
    }, []);
  return (
    <div>
        <Header pageTitle="Login" />
      <section class="main-section">
            <div class="container pt-70">
                <div class="section-content">
                    <form id="checkout-form" action="#">
                        <div class="row mt-30">
                            <div class="col-md-6 pe-3 pe-lg-4">
                                <div class="billing-details">
                                    

                                        <div class="text-center">
                                            <button type="submit" class="btn-style-one ps-4" fdprocessedid="cbba5d">
                                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                            </button>
                                            <button type="submit" class="btn-style-one ps-4 mx-2" fdprocessedid="31nmmo">
                                                <i class="fa fa-google" aria-hidden="true"></i>
                                            </button>
                                            <button type="submit" class="btn-style-one ps-4" fdprocessedid="yjalfr">
                                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                            </button>
                                        </div>

                                        <div class="hr-container my-4">
                                            <hr/>
                                                <div class="hr-text">Or Login With</div>
                                            <hr/>
                                        </div>
                                        <div class="row">
                                            
                                            
                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label for="checkuot-form-email">Email Address</label>
                                                    <input id="checkuot-form-email" type="email" class="form-control" placeholder="Email Address" fdprocessedid="m6x3si"/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="checkuot-form-address">Password</label>
                                                    <input id="checkuot-form-address" type="email" class="form-control" placeholder="Password" fdprocessedid="1gwgbu"/>
                                                </div>
                                                
                                                <div class="form-btn mt-4">
                                                <button type="submit" class="theme-btn btn-style-one" data-loading-text="Please wait..." fdprocessedid="1hxhq"><span class="btn-title">Login</span>
                                                </button>

                                                <div class="mt-4 text-center form-redirect">
                                                    <p>Don't have and account? <a href="#">Register Now</a></p>
                                                </div>

                                                </div> 
                                                
                                                

                                                
                                            </div>
    
                                        </div>
                                    
                                </div>
                            </div>
                            <div class="col-md-6"  style={{backgroundImage: 'url(images/resource/about1-1.jpg)'}}>
                                
                            </div>

                        </div></form>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login
