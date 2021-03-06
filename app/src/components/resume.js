import React from 'react';
import '../styles/shared.scss';
import '../styles/resume.scss';

const Resume = () => {
    return (
        <div className="resume">
            <div className="section skills">
                <div className="section-heading">Skills</div>
                <div className="section-row">
                    <div className="section-column">
                        <div className="section-sub-heading">Technical</div>
                        <div className="skills-row">
                            <div className="skills-column">
                                <span>Go</span>
                                <span>PHP</span>
                                <span>Javascript</span>
                                <span>Node.js</span>
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
                                <span>Selenium</span>
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
                    <div className="section-sub-heading">Software Engineer</div>
                    <div className="section-sub-sub-heading">Vimeo | June 2019 – Present</div>
                        <div className="work-description">
                            Back-end developer contributing to payments services that
                            enable over a million creators to purchase Vimeo's subscription products.
                        </div>
                    </div>
                </div>
                <div className="section-row">
                    <div className="section-column">
                    <div className="section-sub-heading">Software Engineer</div>
                    <div className="section-sub-sub-heading">BounceX | February 2017 – June 2019</div>
                        <div className="work-description">
                            Full stack developer for web push and triggered SMS products.
                            Developed microservices using Go, Kubernetes, and a variety of AWS and GCP tools.
                            Developed and maintained Node.js and PHP services.
                        </div>
                    </div>
                </div>
                <div className="section-row">
                    <div className="section-column">
                    <div className="section-sub-heading">Teaching Fellow & Developer</div>
                    <div className="section-sub-sub-heading">Fullstack Academy | October 2016 – February 2017</div>
                        <div className="work-description">
                            Helped teach full stack Javascript development.
                            Reviewed student projects and assessments.
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