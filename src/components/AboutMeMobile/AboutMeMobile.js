import React from 'react';
import '../AboutMeMobile/AboutMeMobile.css';
import InfoBox from '../InfoBox/InfoBox.js';

function AboutMeMobile() {
    return (
        <div className="mobile">
            <InfoBox title="My Story" text={'My professional career experienced a number of upheavals, and as a result, I decided to study programming, which began long ago, in the distant 2014, when I even quit my job and enrolled to study C# at Telerik Academy.This was my best decision back then, but unfortunately it didn\'t last long-I had a child and a family to take care of, so I went back to law.\nIt seems that my true passion attracts me all the time, so I decided to start studying all over again.\nThis time I prepared in advance what knowledge I would need, made a plan and boldly enrolled to study at SoftUni Academy. I crossed the JS trail; the road was not easy, but it was full of excitement, a lot of new knowledge, and tears of joy! In December 2021, I defended my project and graduated.'} />
            <InfoBox title="More Info" text={'I\'m currently looking for a job as a junior JavaScript Deeveloper - maybe an entry-level intern.'} />
            <InfoBox title="My Education" text={'I graduated from a French-language school with a second language of English. Then I received a master\'s degree in law from Plovdiv University "Paisii Hilendarski." When I realized that law was not my vocation, I decided to enroll in programming.\nI finished the JavaScript track at SoftUni with excellent grades and a great desire to develop and move forward. I do not have a university degree in information technology behind me, but I do not think that this will be a disadvantage for the positions I will apply for in the future.'} />
            <InfoBox title="My Location" text={'I was born in Sliven. I graduated in Plovdiv, but my work and life brought me to the capital, and since 2004, I have lived and worked in Sofia, Bulgaria.\nI prefer remote work because my home is far from the business area where most of the companies offering IT services are situated, but if there is no other way, I am ready to travel longer distances to work.'} />
            <InfoBox title="Current Projects" text={'My current project is the JavaScript Flashcards Trainer, and I plan to develop it. In this way, I will learn from it-my next goal is to create a whole section with flashcards related to job interview questions, which will be very useful for beginners like me.\nI believe that when you work for the benefit of others, for society, there is no way to do something wrong. Whatever you do to contribute and add value to society will be useful, no matter how small. I would very much like to train with an experienced team, where smarter and more advanced people serve as an example.'} />
            <InfoBox title="My Hobbies" text={'In my free time, I like to play video games with my friends, watch good movies, listen to good music, read articles and books, and work on my fantasy short story, which I recently finished. I love watching YouTube videos related to programming or design.'} />
            <InfoBox title="Languages" text={'Although I graduated from a French high school with a second language of English, I never managed to practice French-neither in my personal life nor at work, so I gradually stopped using it.\nEnglish remained the first and primary language of communication in every aspect of my life.I dare to say that I am at an appropriate level, somewhere around B1-B2, and in case of need, I am ready to get the necessary certificates to prove it.'} />
        </div>
    );
}

export default AboutMeMobile;
