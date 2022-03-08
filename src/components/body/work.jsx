import React from "react";
import './body.css';
import City from '../../Images/CityOfOttawa.jpeg'
import Digitera from '../../Images/Digitera.png'
import AOS from "aos";
import "aos/dist/aos.css"; // also use css animations for styles
function Work(){
    let list = [
        {
            title: 'Full Stack PHP Developer(Full-time)',
            time: "July 2021 - August 2021",
            company: "Digitera",
            text: 'At Digitera I worked on fixing and rewriting buggy code, implementing a statistics tracking system and adding a new registration system.',
            image: Digitera,
            id: 2
        },
    
        {
            title: 'Wadding Pool Attendent(Part-time)',
            time: "June 2021 - August 2021",
            company: "City Of Ottawa",
            text: 'I worked at various pools covering shifts and meeting new people. I interacted with the community to give a pleasent COVID-19 safe pool expierence',
            image: City, 
            id: 1
        },

        {
            title: 'Wadding Pool Attendent(Full-time)',
            time: "June 2020 - August 2020",
            company: "City Of Ottawa",
            text: 'I worked at a main pool where my team I implemented ourselves within the community to give the children and adults a enjoyable pool expierence',
            image: City, 
            id: 0
        },
    
    ];
    let worklist = list.map((list) => 
    <li key={list.id}>
            <img data-aos="fade-up-left" data-aos-easing="ease-in-sine"  src={list.image}></img>
            <div data-aos="fade-up-right" data-aos-easing="ease-in-sine" style={{border:"none"}}>
            <h3 >{list.title}</h3>
            <h2>{list.company}</h2>
            <h2>{list.time}</h2>
            <section className="highlights-text">
                <p>{list.text}</p>
            </section>
            </div>
    </li>
    )
    return(        
        <div style={{backgroundColor: '#202549', marginBottom: '15vh'}}>
        <div id="particles-js" className="workparticles"> </div>
        <div className="highlights-work" style={{paddingTop: "25vh"}}>
            <div style={{border:"none"}}>
                <h1 className="highlightsTitle">Work Expierence Highlights</h1>
                    <ul>
                        {worklist}
                        
                    </ul>
            </div>
        </div>
        </div>
    )
}

export default Work;