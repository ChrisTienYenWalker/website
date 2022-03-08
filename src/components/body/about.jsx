import React from "react";
import './body.css';
import AOS from "aos";
import me from '../../Images/Me.jpg'
import "aos/dist/aos.css"; // also use css animations for styles

function About(){
    return( 
        <div id="particles-js" className="particles-wrapper" >
        <div className="aboutposition" >
            <div className="about">
                <h1 data-aos="fade-down" className="font-effect-emboss">
                My Profile
                </h1>
                <hr></hr>
                <img
                data-aos="fade-up-left"
                data-aos-easing="ease-in-sine"
                src={me}
                ></img>
                <div data-aos="fade-up-right" data-aos-easing="ease-in-sine">
                <h2>Details</h2>
                <p>Name: Chris Tien Yen Walker</p>
                <p>Chinese Name: 鍾天恩</p>
                <p>Nationality: Canadian</p>
                <p>Status: Student</p>
                <p>Favourite Food: Deep fried chicken</p>
                <hr></hr>
                <h2>About Me</h2>
                <p>
                    Hi, my name is Chris Walker. I am a high school student who enjoys
                    learning and understanding the world. I love spending time coding, playing music, 
                    playing sports, playing video games, spending time with my family and
                    friends. I am probably questioning reality, relaxing, or improving
                    myself. I am striving to go to a universiy in Canada for engineering and then help the lives of others through my products and designs.
                </p>
                </div>
            </div>
        </div>   
        </div>
    )
}

export default About;