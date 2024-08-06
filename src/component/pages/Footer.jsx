import React from 'react'
import './Footer.css'
import lg from '../../Assets/lg.png'
const Footer = () => {
  return (
    <>
       <footer data-aos="fade-down" data-aos-duration="1500">
      <div class="top">
        <div class="pages">
        <img src={lg}></img>
          <ul>
            <h3>Brand Name</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul>
            <h3>Careers</h3>
            <li><a href="#">Apply Online</a></li>
            <li><a href="#">Available Positions</a></li>
          </ul>

          <ul>
            <h3>About Us</h3>
            <li><a href="#">Meet Our Team</a></li>
            <li><a href="#">Our Responsibilities</a></li>
            <li><a href="#">Our Codes</a></li>
            <li><a href="#">Our Values</a></li>
          </ul>
        </div>
        <div class="newsletter">
          <h3>Stay in Touch</h3>
          <form>
            <input
              type="email"
              name="newsletter_email"
              id="newsletter_email"
              placeholder="Email"
            />
            <input type="button" value="Submit" />
          </form>
        </div>
      </div>
      <div class="social">
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-github"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-youtube"></i>
      </div>
      <div class="info">
        <div class="legal">
          <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
        </div>
        <div class="copyright">2024 Copyright &copy; Debjit_Barsha</div>
      </div>
    </footer>
    </>
  )
}

export default Footer