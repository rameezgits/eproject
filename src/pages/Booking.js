import React from 'react'
import Header from '../components/Header'
import { useEffect } from 'react';

const Booking = () => {
    useEffect(() => {
        document.title = "Hoexr | Book Now"
    }, []);
    return (
        <div>
            <section>
            <Header pageTitle="Book Now" />
                <div class="container pt-70">
                    <div class="section-content">
                        <form id="checkout-form" action="#">
                            <div class="row mt-30">
                                <div class="col-md-6">
                                    <div class="billing-details">
                                        <h3 class="mb-30">Guest Information</h3>
                                        <div class="row">
                                            <div class="mb-3 col-md-6">
                                                <label for="checkuot-form-fname">First Name</label>
                                                <input id="checkuot-form-fname" type="email" class="form-control" placeholder="First Name" fdprocessedid="r2p3u"/>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label for="checkuot-form-lname">Last Name</label>
                                                <input id="checkuot-form-lname" type="email" class="form-control" placeholder="Last Name" fdprocessedid="blnjld"/>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label for="checkuot-form-email">Email Address</label>
                                                    <input id="checkuot-form-email" type="email" class="form-control" placeholder="Email Address" fdprocessedid="32xfy"/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="checkuot-form-address">Address</label>
                                                    <input id="checkuot-form-address" type="email" class="form-control" placeholder="Street address" fdprocessedid="avkprh"/>
                                                </div>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label for="checkuot-form-city">City</label>
                                                <input id="checkuot-form-city" type="email" class="form-control" placeholder="City" fdprocessedid="vrp1zo"/>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label>State/Province</label>
                                                <select class="form-control" fdprocessedid="j3fbpt/">
                                                    <option>Select Province</option>
                                                    <option>Sindh</option>
                                                    <option>Punjab</option>
                                                    <option>Balochistan</option>
                                                </select>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label for="checkuot-form-zip">Zip/Postal Code</label>
                                                <input id="checkuot-form-zip" type="email" class="form-control" placeholder="Zip/Postal Code" fdprocessedid="yrsd6pi"/>
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label>Country</label>
                                                <select class="form-control" fdprocessedid="ud3k1l">
                                                    <option>Select Country</option>
                                                    <option>Pakistan</option>
                                                    <option>India</option>
                                                    <option>Australia</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3>Additional information</h3>
                                    <label for="order_comments" class="pt-3">Order notes&nbsp;<span class="optional">(optional)</span></label>
                                    <textarea id="order_comments" class="form-control" placeholder="Notes about your order, e.g. special notes for delivery." rows="3">                                </textarea>
                                    <div class="d-none d-xl-block">
                                        <div class="mt-4 pt-2 d-flex">
                                            <img class="banner" src="images/resource/about2-2.jpg" alt=""/>
                                                <div class="detail-box">
                                                    <img src="images/logo-v5-black.png" alt=""/>
                                                        <p class="mt-4">Star Avenue Terminal 1, Karachi, Pakistan 75530 +92-21-99242600</p>
                                                        <p>THU, 25/04/24 - FRI, 26/04/24 1 ROOM, 1 NIGHT 1 ADULT, 0 CHILDREN</p>
                                                        <p>
                                                            <b>Room Details</b> <br/> This non-smoking guest room with sitting area offers 1 king bed with room for up to 2 guests and includes wet bar. Stream your favorite programs with free high-speed WiFi or watch a variety of shows on cable TV. Air conditioning, complimentary newspaper, in-room safe, and hairdryer ensure comfort throughout your stay.
                                                        </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-60">
                                    <div class="payment-method">
                                        <h3>Choose a Payment Method</h3>
                                        <ul class="accordion-box">
                                            <li class="accordion block active-block">
                                                <div class="acc-btn active">
                                                    <div class="icon-outer"><i class="lnr-icon-chevron-down"></i></div>
                                                    Credir Card / Debit Card
                                                </div>
                                                <div class="acc-content current">
                                                    <div class="payment-info">
                                                        <div class="row clearfix">
                                                            <div class="col-lg-6 col-md-6 col-sm-12 column">
                                                                <div class="field-input mb-3">
                                                                    <label class="form-label">Check In</label>
                                                                    <input type="text" class="form-control" name="name" placeholder="Arrive Date" required="" fdprocessedid="agairb"/>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-6 col-sm-12 column">
                                                                <label class="form-label">Check Out</label>
                                                                <div class="field-input mb-3">
                                                                    <input type="text" class="form-control" name="number" placeholder="Departure Date" required="" fdprocessedid="yzi04"/>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-6 col-sm-12 column">
                                                                <label class="form-label">Guests</label>

                                                                <select class="form-select form-control">
                                                                <option selected="" disabled="" value="">Select</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>More</option>
                                                            </select>
                                                            </div>
                                                            
                                                            
                                                            <div class="col-lg-6 col-md-12 col-sm-12 column" style={{transform: 'translateY(37px)'}}>
                                                                <div class="field-input message-btn">
                                                                    <button type="submit" class="theme-btn btn-style-one" fdprocessedid="mzf5a7"><span class="btn-title">Book Now</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Booking
