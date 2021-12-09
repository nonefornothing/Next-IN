import React from "react";

import './Footerpage.css';

const Footerpage = () => {
  return (
      <div class="footer-area footer--light">
        <div class="footer-big">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-12">
                <div class="footer-widget">
                  <div class="widget-about">
                    <p>Что если тут написать другой текст на русском языке, для проверки шрифта Rubik )</p>
                    <ul class="contact-details">
                      <li>
                        <span class="icon-earphones"></span> Call Us:
                        <a href="tel:344-755-111">344-755-111</a>
                      </li>
                      <li>
                        <span class="icon-envelope-open"></span>
                        <a href="mailto:support@aazztech.com">support@aazztech.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu">
                    <h4 class="mb-4 font-weight-bold text-uppercase">Our Company</h4>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">How It Works</a>
                      </li>
                      <li>
                        <a href="#">Affiliates</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Plan &amp; Pricing</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu no-padding">
                    <h4 class="mb-4 font-weight-bold text-uppercase">Help Support</h4>
                    <ul>
                      <li>
                        <a href="#">Support Forum</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Support Policy</a>
                      </li>
                      <li>
                        <a href="#">Refund Policy</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Buyers Faq</a>
                      </li>
                      <li>
                        <a href="#">Sellers Faq</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="footer-widget">
                  <div class="footer-menu footer-menu--1">
                  <h5 class="mb-4 font-weight-bold text-uppercase">Connect</h5>
                    <ul class="list-group">
                      <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://www.linkedin.com/company/naologic"><i class="fa fa-linkedin mr-1"></i> LinkedIn</a>
                      </li>
                      <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://twitter.com/naologicerp"><i class="fa fa-twitter mr-1"></i> Twitter</a>       
                      </li>
                      <li class="list-group-item bg-transparent border-0 p-0 mb-2"> 
                        <a href="https://www.reddit.com/r/naologic/"><i class="fa fa-reddit mr-1"></i> Reddit</a>
                      </li>
                      <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://plus.google.com/109511516185666043480" target="_blank"><i class="fa fa-google-plus mr-1"></i> Google+</a>
                        
                      </li>
                      <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://github.com/naologic" target="_blank"><i class="fa fa-github mr-1"></i> Github</a>  
                      </li>
                      <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://blog.naologic.com" target="_blank"><i class="fa fa-medium mr-1"></i> Medium</a>
                      </li>
                      <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://www.facebook.com/naologic/" target="_blank"><i class="fa fa-facebook mr-1"></i> Facebook</a>
                      </li>
                      <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                        <a href="https://www.youtube.com/channel/UCtHmuf2oQLnksokfz8GIbKA" target="_blank"><i class="fa fa-youtube mr-1"></i> YouTube</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="mini-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="copyright-text">
                  <p>© 2018
                    <a href="#">DigiPro</a>. All rights reserved. Created by
                    <a href="#">AazzTech</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footerpage;
