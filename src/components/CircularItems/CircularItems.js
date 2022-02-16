import React, { useState } from 'react';
import AboutMeMobile from '../AboutMeMobile/AboutMeMobile.js';
import '../CircularItems/CircularItems.css';
import InfoBoxes from '../InfoBoxes/InfoBoxes.js';

function CircularItems() {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className="menu-container">
            <AboutMeMobile />
            <div id="menu" className={isActive ? "menu" : 'menu active'}>
                <div onClick={handleToggle} className="toggle">
                    <p className="action">Click Me</p>
                    <li className="menu-item" style={{ '--i': 0 }}>
                        <ion-icon className="icons" name="chatbox-ellipses-outline"></ion-icon>
                        <div className="box">
                            <h3>About Me</h3>
                            <InfoBoxes text={'My name is Pavleta Taseva, and I am a beginner JavaScript developer. Although I do not have a degree in information technology behind me, I made a lot of efforts and in the last year and a half I completed the JavaScript path of the training offered by SoftUni-Sofia. My professional career experienced a number of upheavals, and as a result, I decided to study programming, which began long ago, in the distant 2014, when I even quit my job and enrolled to study C# at Telerik Academy.This was my best decision back then, but unfortunately it didn\'t last long-I had a child and a family to take care of, so I went back to law.\n\nIt seems that my true passion attracts me all the time. My inspiration came back suddenly when a friend of mine, who was studying C++ and had already started working on video game servers, asked me to make a website for him because he couldn’t build it with HTML & CSS. And I knew only the basics, so I decided to start studying all over again.\n\nThis time I prepared in advance what knowledge I would need, made a plan and boldly enrolled to study at SoftUni Academy. I crossed the JS trail; the road was not easy, but it was full of excitement, a lot of new knowledge, and tears of joy! In December 2021, I defended my project and graduated. Since then, I have been training myself and I will not stop coding.\n\nNow that I think about it, the law is not much different from programming. It also has rules and instructions. Every law is logically ordered; there are provisions (how something should work) and penal provisions, which I associate with error handling and debugging. Every law and norm has a scope, just like in programming. Inheritance, children, and parents in both law and programming. Both follow logic and respect architecture. Rulemaking is also like building an application. Bugs are not absent in the legal world, and after testing them in society, they are also removed. I see so many similarities and the same schemes, but I will not hide—law will never attract me in the same way as programming.'} />
                        </div>
                    </li>
                    <li className="menu-item" style={{ '--i': 1 }}>
                        <ion-icon className="icons" name="information-circle-outline"></ion-icon>
                        <div className="box">
                            <h3>More Info</h3>
                            <InfoBoxes text={'I\'m currently looking for a job as a junior JavaScript Deeveloper - maybe an entry-level intern.'} />
                        </div>
                    </li>
                    <li className="menu-item" style={{ '--i': 2 }}>
                        <ion-icon className="icons" name="school-outline"></ion-icon>
                        <div className="box">
                            <h3>My Education</h3>
                            <InfoBoxes text={'I graduated from a French-language school with a second language of English. Then I received a master\'s degree in law from Plovdiv University "Paisii Hilendarski." When I realized that law was not my vocation, I decided to enroll in programming. I finished the JavaScript track at SoftUni with excellent grades and a great desire to develop and move forward. I do not have a university degree in information technology behind me, but I do not think that this will be a disadvantage for the positions I will apply for in the future.'} />
                        </div>
                    </li>
                    <li className="menu-item" style={{ '--i': 3 }}>
                        <ion-icon className="icons" name="home-outline"></ion-icon>
                        <div className="box">
                            <h3>My Location</h3>
                            <InfoBoxes text={'I was born in Sliven. I graduated in Plovdiv, but my work and life brought me to the capital, and since 2004, I have lived and worked in Sofia, Bulgaria. I prefer remote work because my home is far from the business area where most of the companies offering IT services are situated, but if there is no other way, I am ready to travel longer distances to work.'} />
                        </div>
                    </li>
                    <li className="menu-item" style={{ '--i': 4 }}>
                        <ion-icon className="icons" name="time-outline"></ion-icon>
                        <div className="box">
                            <h3>Current Projects</h3>
                            <InfoBoxes text={'My current project is the JavaScript Flashcards Trainer, and I plan to develop it. In this way, I will learn from it-my next goal is to create a whole section with flashcards related to job interview questions, which will be very useful for beginners like me. I believe that when you work for the benefit of others, for society, there is no way to do something wrong. Whatever you do to contribute and add value to society will be useful, no matter how small. I would very much like to train with an experienced team, where smarter and more advanced people serve as an example.'} />
                        </div>
                    </li>
                    <li className="menu-item" style={{ '--i': 5 }}>
                        <ion-icon className="icons" name="color-palette-outline"></ion-icon>
                        <div className="box">
                            <h3>My Hobbies</h3>
                            <InfoBoxes text={'In my free time, I like to play video games with my friends, watch good movies, listen to good music, read articles and books, and work on my fantasy short story, which I recently finished. I love watching YouTube videos related to programming or design.'} />
                        </div>
                    </li>
                    <li className="menu-item" style={{ '--i': 6 }}>
                        <ion-icon className="icons" name="earth-outline"></ion-icon>
                        <div className="box">
                            <h3>Languages</h3>
                            <InfoBoxes text={'Although I graduated from a French high school with a second language of English, I never managed to practice French-neither in my personal life nor at work, so I gradually stopped using it. English remained the first and primary language of communication in every aspect of my life.I dare to say that I am at an appropriate level, somewhere around B1-B2, and in case of need, I am ready to get the necessary certificates to prove it.'} />
                        </div>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default CircularItems;
