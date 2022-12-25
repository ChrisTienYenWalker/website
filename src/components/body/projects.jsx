import React from "react";
import './body.css';
import Vex from '../../Images/Vex.jpg';
import cu from '../../Images/CU.jpg';
import ce from '../../Images/G11CE.png';
import cs from '../../Images/grade11.png';
import Kinaxis from '../../Images/Kinaxis.png';
import linear from '../../Images/linear.png';
import uottawa from '../../Images/uottawa.jpg';
import levels from '../../Images/levels.png';

import AOS from "aos";
import "aos/dist/aos.css"; // also use css animations for styles
function Projects(){
    let list = [

        {
            title: 'Robotics Project',
            year: ' ',
            text: 'Me and my team designed a robot to compete against another team to pick up the most blocks',
            image: Vex,
            link: '', 
            skills: "Programming, Assembly, Design, Teamwork",
            linkText: '', 
            id: 10
        },

        {
            title: 'Mancala',
            year: ' ',
            text: 'Me and my team designed a robot to compete against another team to pick up the most blocks',
            image: Vex,
            link: '', 
            skills: "Programming, Assembly, Design, Teamwork",
            linkText: '', 
            id: 9
        },

        {
            title: 'Grade 12 CS projects',
            year: ' ',
            text: 'Me and my team designed a robot to compete against another team to pick up the most blocks',
            image: Vex,
            link: '', 
            skills: "Programming, Assembly, Design, Teamwork",
            linkText: '', 
            id: 8
        },

        {
            title: 'Vex Robotics',
            year: ' ',
            text: 'Me and my team designed a robot to compete against another team to pick up the most blocks',
            image: Vex,
            link: '', 
            skills: "Programming, Assembly, Design, Teamwork",
            linkText: '', 
            id: 7
        },
    
        {
            title: 'UottaHack3',
            year: ' ',
            text: 'A health website and app that records and reminds you to take your medicine',
            image: uottawa,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/ChrisTeinYenWalker/uottahack2020-webapp', 
            id: 6
        },
        
        {
            title: 'Carleton Hackathon',
            year: ' ',
            text: 'A social media for students to get help and communicate about school related topics',
            image: cu,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/A1igator/cuhacking2020-frontend', 
            id: 5
        },

        {
            title: 'Grade 11 Engineering projects',
            year: ' ',
            text: 'A class where I built various computer engineering projects including: a binary bit calculator, traffic light system, number guessing game and more',
            image: ce,
            link: '', 
            linkText: '', 
            id: 4
        },

        {
            title: 'Grade 11 CS projects',
            year: ' ',
            text: 'A grade 11 class where I built a games, console applications and solved algorithmic problems',
            image: cs,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/ChrisTeinYenWalker/Grade11cs', 
            id: 3
        },

        {
            title: 'Kinaxis Hackathon',
            year: ' ',
            text: 'A mental health 2D maze game with a 3D level',
            image: Kinaxis,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/A1igator/LTAMH', 
            id: 2
        },

        {
            title: 'Average level Calculator',
            year: ' ',
            text: 'A calculator to help predict your percentage grade from all your tests and assignments using the Ontairo 4 level',
            image: levels,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/ChrisTeinYenWalker/average-Levels.github.io', 
            id: 1
        },

        {
            title: 'Linear Calculator',
            year: ' ',
            text: 'Solve linear line mathematics problems',
            image: linear,
            link: 'Check the code out on Github', 
            linkText: 'https://github.com/ChrisTeinYenWalker/linear-calculator', 
            id: 0
        },              
    
    ];

    // list = list.reverse();
    let projectList = list.map((list) => 
    <li key={list.id} className="projectBorder">
        <div style={{border:"none"}}>
           
            {list.id%2 != 0 && 
            <div data-aos="fade-up-right" data-aos-easing="ease-in-sine" style={{border:"none"}}>
                <div style={{width:"50%", float:"left", border:"none"}}>
                    <img data-aos="fade-up-left" data-aos-easing="ease-in-sine" src={list.image}></img>
                </div>
                <div style={{border:"none", height: "50vh", marginLeft:"1vw",}}>
                <h3 style={{textAlign:"right", marginTop: "0"}}>{list.title}</h3>
                <section className="highlights-text projectTextDivRight" style={{right:"0", position:"absolute", textAlign: "right", height:"25vh" }}>
                        <p style={{padding:"0"}}>{list.text}</p>
                        <p style={{padding:"0"}}>{list.skills}</p>
                </section>
                <a className="highlightsLink" style={{fontSize: ".9vmax", padding: "0"}} href={list.link}>{list.linkText}</a>
                </div>
            </div>
            }

            {list.id%2 == 0 && 
            <div data-aos="fade-up-right" data-aos-easing="ease-in-sine" style={{border:"none"}}>
                <div style={{width:"50%", float:"right", border:"none", right:"-2vw"}}>
                    <img data-aos="fade-up-left" data-aos-easing="ease-in-sine" src={list.image}></img>
                </div>
                <div style={{border:"none", height: "50vh", }}>
                <h3 style={{textAlign:"left", marginTop: "0"}}>{list.title}</h3>
                <section className="highlights-text projectTextDivLeft" style={{left:"0", position:"absolute", textAlign: "left", height:"25vh" }}>
                        <p style={{padding:"0"}}>{list.text}</p>
                        <p style={{padding:"0"}}>{list.skills}</p>
                </section>
                <a className="highlightsLink" style={{fontSize: ".9vmax", padding: "0"}} href={list.link}>{list.linkText}</a>
                </div>
            </div>
            }
            
        </div>
    </li>
    )
    return(
        <div>
        <div id="particles-js" className="projectparticles">
        </div>
        <div className="highlights-pj" style={{marginTop: "-130vh"}}>
            <div style={{width: '60%', boarderheight: '150%'}}>
                <h1 className="highlightsTitle" >Project Highlights</h1>
                <ul style={{marginBottom: '100px'}}>
                    {projectList}
                </ul>
            </div>
        </div>
        </div>
    )
}
    

export default Projects;