import React from 'react'
import '../styles/shared.scss';
import '../styles/resume.scss';

const Resume = () => {
    return (
        <div class="resume">
            <div className="section skills">
                <div className="section-heading">Skills</div>
                <div className="section-row">
                    <div className="section-column">
                        <div className="section-sub-heading">Technical</div>
                        <div className="skills-row">
                            <div className="skills-column">
                                <span>Javascript</span>
                                <span>Node.js</span>
                                <span>Golang</span>
                                <span>PHP</span>
                            </div>
                            <div className="skills-column">
                                <span>Python</span>
                                <span>SQL</span>
                                <span>Docker</span>
                                <span>Kubernetes</span>
                            </div>
                            <div className="skills-column">
                                <span>React</span>
                                <span>Angular</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <div className="skills-column">
                                <span>Sass</span>
                                <span>Webpack</span>
                                <span>Gulp</span> 
                                <span>CircleCI</span>
                            </div>
                            <div className="skills-column">
                                <span>Git</span>
                                <span>Jest</span>
                                <span>Mocha</span>
                                <span>Chai</span> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-row">
                    <div className="section-column">
                        <div className="section-sub-heading">Non-Technical  </div>
                        <div className="skills-row">
                            <div className="skills-column">
                                <span>Graphic Design</span>
                                <span>Drawing</span>
                                <span>Photography</span>
                            </div>
                            <div className="skills-column">
                                <span>Layout Design</span>
                                <span>Painting</span>
                                <span>Ceramics</span>
                            </div>
                            <div className="skills-column">
                                <span>Digital Marketing</span>
                                <span>Copy Editing</span>
                                <span>Google Analytics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section work-experience">
                <div className="section-heading">Work Experience</div>
                <div className="section-row">
                    <div className="section-column">
                    <div className="section-sub-heading">Software Engineer | BounceX</div>
                        {/* <div className="date">February 2017-Present</div> */}
                        <div className="work-description">
                            Full-stack developer working on triggered sends products with a focus on
                            web push and SMS channels. Develops microservices using Golang, Kubernetes, and 
                            a variety of AWS and GCP services. Develops and maintains Node.js and PHP services.
                        </div>
                    </div>
                </div>
                <div className="section-row">
                    <div className="section-column">
                    <div className="section-sub-heading">Integration Engineer | BounceX</div>
                        {/* <div className="date">February 2017-Present</div> */}
                        <div className="work-description">
                            Built custom integrations for e-commerce and publishing clients using Javascript and jQuery.
                            Integrated BounceX PHP platform with client APIs.
                            Managed a team of three integration engineers.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resume