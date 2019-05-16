import React from 'react';
import '../styles/shared.scss';
import '../styles/resume.scss';

const skills = {
    Technical: [
        'Go',
        'Javascript',
        'Node.js',
        'PHP',
        'SQL',
        'Python',
        'Docker',
        'Kubernetes',
        'HTML',
        'CSS',
        'Angular',
        'React',
        'CircleCI',
        'Sass',
        'Webpack',
        'Gulp',
        'Git',
        'Jest',
        'Mocha',
        'Chai'
    ],
    'Non-Technical': [
        'Graphic Design',
        'Drawing',
        'Photography',
        'Layout Design',
        'Painting',
        'Ceramics',
        'Digital Marketing',
        'Copy Editing',
        'Google Analytics'
    ]
};

const renderSkills = (skills, numRows) => {
    const columns = [];
    for (let i = 0; i < skills.length; i += numRows) {
        const spans = [];
        for (let j = i; j < i + numRows; j++) {
            spans.push(<span key={j}>{skills[j]}</span>)
        }
        columns.push(<div key={i} className="skills-column">{spans}</div>);
    }
    return <div className="skills-row">{columns}</div>
}

const renderSkillsSection = (data) => {
    const section = [];
    for (let key in data) {
        section.push(
            <div className="section-row">
                <div className="section-column">
                    <div className="section-sub-heading">{key}</div>
                    <div className="skills-row">
                        {renderSkills(data[key], 4)}
                    </div>
                </div>
            </div>
        );
    };
    return section;
}

const Resume = () => {
    return (
        <div className="resume">
            <div className="section skills">
                <div className="section-heading">Skills</div>
                {renderSkillsSection(skills)}
            </div>
            <div className="section work-experience">
                <div className="section-heading">Work Experience</div>
                <div className="section-row">
                    <div className="section-column">
                    <div className="section-sub-heading">Software Engineer</div>
                    <div className="section-sub-sub-heading">BounceX | July 2018 – Present</div>
                        <div className="work-description">
                            Full stack developer working on triggered sends products with a focus on
                            web push and SMS channels. Develops microservices using Golang, Kubernetes, and 
                            a variety of AWS and GCP services. Develops and maintains Node.js and PHP services.
                        </div>
                    </div>
                </div>
                <div className="section-row">
                    <div className="section-column">
                    <div className="section-sub-heading">Integration Engineer</div>
                    <div className="section-sub-sub-heading">BounceX | February 2017 – July 2018</div>
                        <div className="work-description">
                            Built custom integrations for e-commerce and publishing clients using Javascript and jQuery.
                            Integrated BounceX PHP platform with client APIs.
                            Managed a team of three integration engineers.
                        </div>
                    </div>
                </div>
                <div className="section-row">
                    <div className="section-column">
                    <div className="section-sub-heading">Teaching Fellow & Developer</div>
                    <div className="section-sub-sub-heading">Fullstack Academy | October 2016 – February 2017</div>
                        <div className="work-description">
                            Helped teach full stack Javascript development.
                            Code reviewed student projects and assessments.
                            Interviewed prospective students. Built features for online 
                            learning platform using Angular and Node.js.
                        </div>
                    </div>
                </div>
                <div className="section-row">
                    <div className="section-column">
                    <div className="section-sub-heading">Customer Success Manager</div>
                    <div className="section-sub-sub-heading">BounceX | July 2014 – July 2016</div>
                        <div className="work-description">
                            Worked with enterprise e-commerce and publishing clients to implement 
                            high-impact digital marketing campaigns using BounceX&#39;s behavioral 
                            automation platform. Analyzed client data and ran A/B tests to optimize performance.
                        </div>
                    </div>
                </div>
                <div className="section-row">
                    <div className="section-column">
                    <div className="section-sub-heading">Ad Design Assistant</div>
                    <div className="section-sub-sub-heading">The Daily Pennsylvanian | September 2013 – May 2014</div>
                        <div className="work-description">
                            Designed a wide variety of ads for both print and digital publications.
                            Developed brand styles and created spec ads for local businesses and new customers.
                        </div>
                    </div>
                </div>
            </div>
            <div className="section education">
                <div className="section-heading">Education</div>
                <div className="section-row">
                    <div className="section-column">
                        <div className="section-sub-heading">Fullstack Academy of Code</div>
                        <div className="section-sub-sub-heading">Software Engineering Immersive | 2016</div>
                    </div>
                </div>
                <div className="section-row">
                <div className="section-column">
                        <div className="section-sub-heading">University of Pennsylvania</div>
                        <div className="section-sub-sub-heading">BA, Visual Studies | 2014</div>
                        <div className="work-description">
                            Summa Cum Laude. Minors: French, History of Art.
                        </div>
                    </div>
                </div>
            </div>
            <div className="section languages">
                <div className="section-heading">Languages</div>
                <div className="section-row">
                    <div className="section-column">
                        <div className="section-sub-heading">French</div>
                        <div className="section-sub-sub-heading">Full professional proficiency</div>
                        <div className="work-description">
                            Diplôme de Français Professionel - Affaires C1
                            (business French certification from the Paris Chambre de Commerce and Industry).
                            Three time Lauréat National in Le Grand Concours, the National French 
                            Contest of the American Association of Teachers of French.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resume