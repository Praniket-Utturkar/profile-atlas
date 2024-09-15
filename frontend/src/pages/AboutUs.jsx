
import React from 'react'
import AboutItem from '../components/AboutItem'
import Vector4 from '../assets/Vector/4.png'

export default function AboutUs() {
    return(
        <section id="about">
        <div className="container-fluid px-0">

            <div className="container mb-md-0 mt-5">
            <h1 className="heading-text au-text">About Us</h1>

           
            <img src={Vector4} alt="Vector4" className='Vector4' />
            <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card">
                
                    <AboutItem
                        q = "Welcome to ProfileAtlas!"
                        a = "At ProfileAtlas, we believe that connections should be as easy to find as the places we explore. Our mission is to bridge the gap between people and places by creating an intuitive platform where users can view profiles and interactively explore their associated locations on a dynamic map.
Whether you are searching for a new business, a local professional, or simply exploring new connections, ProfileAtlas brings the world to your fingertips—one profile and one location at a time. By combining detailed profiles with map-based exploration, we offer a unique and engaging way to discover people and places from all around the world."
                    />

                    <AboutItem
                        q = "Our Vision: "
                        a = "
To create a world where profiles and places are seamlessly connected, empowering users to discover, connect, and explore like never before. We aim to be the go-to platform for both individuals and businesses seeking to connect through the power of location-based profiles."
                    />
                   
                    <AboutItem
                        q = "Contact Us :"
                        a = "We’d love to hear from you! Whether you have questions, feedback, or just want to learn more about ProfileAtlas, feel free to reach out : 
Email: contactus@profileatlas.com , 
Phone: +91 1232345456 , 
Office Address: Empire Building, Vimannagar, Pune, Maharashtra, India."
                    />
                </div>
            </div>
            </div>

        </div>
        </section>
    )
}