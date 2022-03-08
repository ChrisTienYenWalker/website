import React from 'react';
import '../footer/footer.css'

function contact(){
let contacts = [
    {
        name: "Email",
        link: "mailto:christienyenwalker@gmail.com",
        id: 1
    },

    {
        name: "Linkdin",
        link: "https://www.linkedin.com/in/chris-walker-185485216/",
        id: 2

    },

    {
        name: "Github",
        link: "https://github.com/ChrisTeinYenWalker",
        id: 3
    },

    {
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100045286130324",
        id: 4
    },
  
];

const contactList =  contacts.map((contacts) => <li key={contacts.id}><a href={contacts.link}>{contacts.name}</a></li>);

return (
    <div>
        {contactList}
    </div>
)
}

function extras(){
    let extras = [
        {
            name: "Resume",
            link: "https://google.com",
            id: 1
        },
    
        {
            name: "More Projects",
            link: "https://google.com",
            id: 2
    
        },
    
        {
            name: "More Work expierence",
            link: "https://google.com",
            id: 3
        },
      
    ];
    
    const extrasList =  extras.map((extras) => <li key={extras.id}><a href={extras.link}>{extras.name}</a></li>);
    
return (
    <div>
        {extrasList}
    </div>
)
}

function footer(){

    const displayContacts = contact();
    const displayExtras = extras();

    return(
        <div className='box'>
            <div className="contact">
                <h1>Contact Me</h1>
               {displayContacts}
            </div>
            <div className="extra">
                <h1>Check Out More</h1>
                {displayExtras}
            </div>            
        </div>
        
    );
}

export default footer;