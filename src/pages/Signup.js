import React from 'react'
import Header from '../components/Header'
import { useEffect } from 'react'

const Signup = () => {
    useEffect(() => {
        document.title = "Hoexr | Signup"
    }, []);
  return (
    <div>
        <Header pageTitle="Register Here" />
      <section class="main-section">
            <div class="container pt-70">
                <div class="section-content">
                    <form id="checkout-form" action="#">
                        <div class="row mt-30">
                            <div class="col-md-6 pe-3 pe-lg-4">
                                <div class="billing-details">
                                    
                                    
                                        <div class="row">

                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label for="checkuot-form-email">User Name</label>
                                                    <input id="checkuot-form-email" type="email" class="form-control" placeholder="User Name"/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="checkuot-form-email">Email Address</label>
                                                    <input id="checkuot-form-email" type="email" class="form-control" placeholder="Email Address"/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="checkuot-form-address">Password</label>
                                                    <input id="checkuot-form-address" type="password" class="form-control" placeholder="Password"/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="checkuot-form-address">Confirm Password</label>
                                                    <input id="checkuot-form-address" type="password" class="form-control" placeholder="Confirm Password"/>
                                                </div>
                                                <div class="form-btn mt-4">
                                                    <button type="submit" class="theme-btn btn-style-one" data-loading-text="Please wait..."><span class="btn-title">Register</span>
                                                </button> 

                                                <div class="mt-4 text-center form-redirect">
                                                    <p>Already have and account? <a href="#">Login</a></p>
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

export default Signup
