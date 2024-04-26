import React from 'react'

const handleHomeClick = () => {
    window.location.href = '/';
};
const handleAboutClick = () => {
    window.location.href = '/about';
};
const handleContactClick = () => {
    window.location.href = '/contact';
};
const handleRoomsClick = () => {
    window.location.href = '/rooms';
};
const handleRoomsSuitsClick = () => {
    window.location.href = '/rooms-suits';
};
const handleRoomDetailsClick = () => {
    window.location.href = '/room-details';
};
const handleFaqClick = () => {
    window.location.href = '/faq';
};
const handlePricingClick = () => {
    window.location.href = '/pricing';
};
const handleNewsClick = () => {
    window.location.href = '/news';
};
const handleTeamClick = () => {
    window.location.href = '/team';
};

const Navbar = () => {
    return (
        <div>
            <header class="main-header header-style-two">
                <div class="auto-container">
                    <div class="header-top">
                        <div class="inner-box">

                            <div class="top-left">
                                <span><i class="icon fa fa-location"></i>1247/Plot No. 39, 15th Phase, USA</span>
                            </div>

                            <div class="top-right">
                                <ul class="social-icon-one">
                                    <li>Follow Us :</li>
                                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="main-box">
                        <div class="logo-box">
                            <div class="logo"><a href="index-2.html"><img src="images/logo-v5-black.png" alt="" title="Tronis"/></a></div>
                        </div>

                        <div class="nav-outer">
                            <nav class="nav main-menu">
                                <ul class="navigation">
                                    <li><a href="#" onClick={handleHomeClick}>Home</a>

                                    </li>
                                    <li class="dropdown"><a href="#">Rooms &amp; Suites</a>
                                        <ul>
                                            <li><a href="#" onClick={handleRoomsClick}>Rooms</a></li>
                                            <li><a href="#" onClick={handleRoomsSuitsClick}>Rooms and Suits</a></li>
                                            <li><a href="#" onClick={handleRoomDetailsClick}>Room Details</a></li>
                                        </ul>
                                        <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                    <li class="dropdown"><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="#" onClick={handleAboutClick}>About</a></li>
                                            <li><a href="#" onClick={handleFaqClick}>Faq</a></li>
                                            <li><a href="#" onClick={handlePricingClick}>Pricing</a></li>
                                            <li><a href="#" onClick={handleTeamClick}>Team</a></li>
                                        </ul>
                                        <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>
                                    </li>
                                    <li ><a href="#" onClick={handleNewsClick}>News</a></li>
                                    
                                    <li><a href="#" onClick={handleContactClick}>Contact</a></li>
                                </ul>
                            </nav>

                        </div>
                        <div class="outer-box">
                            <button class="search-btn">
                                <img src="images/icons/search.png" alt=""/>
                            </button>
                            <div class="mobile-nav-toggler"><i class="icon fa fa-bars"></i></div>

                        </div>
                    </div>

                    <div class="mobile-menu">
                        <div class="menu-backdrop"></div>

                        <nav class="menu-box">
                            <div class="upper-box">
                                <div class="nav-logo"><a href="index.html"><img src="images/logo-2.png" alt="" title=""/></a></div>
                                <div class="close-btn"><i class="icon fa fa-times"></i></div>
                            </div>
                            <ul class="navigation clearfix">


                                <li class="dropdown"><a href="#">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home page 01</a></li>
                                        <li><a href="index-2.html">Home page 02</a></li>
                                        <li class="dropdown"><a href="#">Single Styles</a>
                                            <ul>
                                                <li><a href="index-1-single.html">Single Style One</a></li>
                                                <li><a href="index-2-single.html">Single Style Two</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                        <li class="dropdown"><a href="#">Dark Styles</a>
                                            <ul>
                                                <li><a href="index-1-dark.html">Dark Style One</a></li>
                                                <li><a href="index-2-dark.html">Dark Style Two</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                        <li><a href="index-1-rtl.html">RTL Style One</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                <li class="dropdown"><a href="#">Rooms &amp; Suites</a>
                                    <ul>
                                        <li><a href="page-rooms.html">Rooms</a></li>
                                        <li><a href="page-rooms-suite.html">Rooms and Suits</a></li>
                                        <li><a href="room-details.html">Room Details</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                <li class="dropdown"><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="page-about.html">About</a></li>
                                        <li><a href="page-contact.html">Contact</a></li>
                                        <li><a href="page-faq.html">Faq</a></li>
                                        <li><a href="page-pricing.html">Pricing</a></li>
                                        <li><a href="page-testimonial.html">Testimonials</a></li>
                                        <li><a href="page-404.html">404</a></li>
                                        <li class="dropdown"><a href="#">Team</a>
                                            <ul>
                                                <li><a href="page-team.html">Team List</a></li>
                                                <li><a href="page-team-details.html">Team Details</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                        <li class="dropdown"><a href="#">Shop</a>
                                            <ul>
                                                <li><a href="shop-products.html">Products</a></li>
                                                <li><a href="shop-products-sidebar.html">Products with Sidebar</a></li>
                                                <li><a href="shop-product-details.html">Product Details</a></li>
                                                <li><a href="shop-cart.html">Cart</a></li>
                                                <li><a href="shop-checkout.html">Checkout</a></li>
                                            </ul>
                                            <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                    </ul>
                                    <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                <li class="dropdown"><a href="#">News</a>
                                    <ul>
                                        <li><a href="news-grid.html">News Grid</a></li>
                                        <li><a href="news-details.html">News Details</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                <li><a href="page-contact.html">Contact</a></li>
                            </ul>
                            <ul class="contact-list-one">
                                <li>

                                    <div class="contact-info-box">
                                        <i class="icon lnr-icon-phone-handset"></i>
                                        <span class="title">Call Now</span>
                                        <a href="tel:+92880098670">+92 (8800) - 98670</a>
                                    </div>
                                </li>
                                <li>

                                    <div class="contact-info-box">
                                        <span class="icon lnr-icon-envelope1"></span>
                                        <span class="title">Send Email</span>
                                        <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#f9919c9589b99a969489989780d79a9694"><span class="__cf_email__" data-cfemail="365e535a467655595b4657584f1855595b">[email&nbsp;protected]</span></a>
                                    </div>
                                </li>
                                <li>

                                    <div class="contact-info-box">
                                        <span class="icon lnr-icon-clock"></span>
                                        <span class="title">Send Email</span>
                                        Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                    </div>
                                </li>
                            </ul>
                            <ul class="social-links">
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </nav>
                    </div>

                    <div class="search-popup">
                        <span class="search-back-drop"></span>
                        <button class="close-search"><span class="fa fa-times"></span></button>
                        <div class="search-inner">
                            <form method="post" action="https://html.kodesolution.com/2023/hoexr-html/index.html">
                                <div class="form-group">
                                    <input type="search" name="search-field" value="" placeholder="Search..." required=""/>
                                        <button type="submit"><i class="fa fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div class="sticky-header">
                        <div class="auto-container">
                            <div class="inner-container">

                                <div class="logo">
                                    <a href="index.html" title=""><img src="images/logo-v5-black.png" alt="" title=""/></a>
                                </div>

                                <div class="nav-outer">

                                    <nav class="main-menu">
                                        <div class="navbar-collapse show collapse clearfix">
                                            <ul class="navigation clearfix">


                                                <li class="dropdown"><a href="#">Home1</a>
                                                    <ul>
                                                        <li><a href="index.html">Home page 01</a></li>
                                                        <li><a href="index-2.html">Home page 02</a></li>
                                                        <li class="dropdown"><a href="#">Single Styles</a>
                                                            <ul>
                                                                <li><a href="index-1-single.html">Single Style One</a></li>
                                                                <li><a href="index-2-single.html">Single Style Two</a></li>
                                                            </ul>
                                                            <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                                        <li class="dropdown"><a href="#">Dark Styles</a>
                                                            <ul>
                                                                <li><a href="index-1-dark.html">Dark Style One</a></li>
                                                                <li><a href="index-2-dark.html">Dark Style Two</a></li>
                                                            </ul>
                                                            <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                                        <li><a href="index-1-rtl.html">RTL Style One</a></li>
                                                    </ul>
                                                    <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                                <li class="dropdown"><a href="#">Rooms &amp; Suites</a>
                                                    <ul>
                                                        <li><a href="page-rooms.html">Rooms</a></li>
                                                        <li><a href="page-rooms-suite.html">Rooms and Suits</a></li>
                                                        <li><a href="room-details.html">Room Details</a></li>
                                                    </ul>
                                                    <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                                <li class="dropdown"><a href="#">Pages</a>
                                                    <ul>
                                                        <li><a href="page-about.html">About</a></li>
                                                        <li><a href="page-contact.html">Contact</a></li>
                                                        <li><a href="page-faq.html">Faq</a></li>
                                                        <li><a href="page-pricing.html">Pricing</a></li>
                                                        <li class="dropdown"><a href="#">Team</a></li>
                                                        <li class="dropdown"><a href="#">Shop</a>
                                                            <ul>
                                                                <li><a href="shop-products.html">Products</a></li>
                                                                <li><a href="shop-products-sidebar.html">Products with Sidebar</a></li>
                                                                <li><a href="shop-product-details.html">Product Details</a></li>
                                                                <li><a href="shop-cart.html">Cart</a></li>
                                                                <li><a href="shop-checkout.html">Checkout</a></li>
                                                            </ul>
                                                            <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                                    </ul>
                                                    <div class="dropdown-btn"><i class="fa fa-angle-down"></i></div></li>
                                                <li class="dropdown"><a href="">News</a>
                                                </li>
                                                <li><a href="page-contact.html">Contact</a></li>
                                            </ul>
                                        </div>
                                    </nav>

                                    <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Navbar