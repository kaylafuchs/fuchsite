import React from 'react';
import '../styles/shared.scss';
import '../styles/resume.scss';
import '../styles/creative-work.scss';

const CreativeWork = () => {
    return (
        <div className="creative-work">
            <div className="section photography">
                <div className="section-heading">Photography</div>
                <div className="section-sub-heading">Visual Studies Senior Thesis: Street Photography</div>
                <div className="section-row mobile-column">
                    <img className="img-tall" src="https://static.kaylafuchs.com/vlst_3_small.png"></img>
                    <img className="img-tall" src="https://static.kaylafuchs.com/vlst_1_small.png"></img>
                    <img className="img-tall" src="https://static.kaylafuchs.com/vlst_2_small.png"></img>
                </div>
                <div className="section-sub-heading">Personal</div>
                <div className="section-row mobile-column">
                    <img className="img-wide" src="https://static.kaylafuchs.com/personal_2_small.png"></img>
                    <img className="img-wide" src="https://static.kaylafuchs.com/personal_1_small.png"></img>
                </div>
            </div>
            <div className="section illustration">
                <div className="section-heading">Illustration</div>
                <div className="section-sub-heading">Cover art: Penn Political Review, Spring 2013</div>
                <div className="section-row mobile-column">
                    <img className="img-tall" src="https://static.kaylafuchs.com/PPRCover_mediapolitics.png"></img>
                </div>
            </div>
            <div className="section ceramics">
                <div className="section-heading">Ceramics</div>
                <div className="section-sub-heading">Created at Choplet Ceramics Studio | Brooklyn, NY</div>
                <div className="section-row mobile-column">
                    <img className="ceramics-img" src="https://static.kaylafuchs.com/ceramics_4.png"></img>
                    <img className="ceramics-img" src="https://static.kaylafuchs.com/ceramics_6_small.png"></img>
                    <img className="ceramics-img" src="https://static.kaylafuchs.com/ceramics_7_small.png"></img>
                </div>
            </div>
        </div>
    )
}
export default CreativeWork