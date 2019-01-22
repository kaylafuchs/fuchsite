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
                <div className="section-row">
                    <img className="img-tall" src="https://storage.googleapis.com/kf-creative-assets/vlst_3.png"></img>
                    <img className="img-tall" src="https://storage.googleapis.com/kf-creative-assets/vlst_1.png"></img>
                    <img className="img-tall" src="https://storage.googleapis.com/kf-creative-assets/vlst_2.png"></img>
                </div>
                <div className="section-sub-heading">Personal</div>
                <div className="section-row">
                    <img className="img-wide" src="https://storage.googleapis.com/kf-creative-assets/personal_2.png"></img>
                    <img className="img-wide" src="https://storage.googleapis.com/kf-creative-assets/personal_1.png"></img>
                </div>
            </div>
            <div className="section illustration">
                <div className="section-heading">Illustration</div>
                <div className="section-sub-heading">Cover art: Penn Political Review, Spring 2013</div>
                <div className="section-row">
                    <img className="img-tall" src="https://storage.googleapis.com/kf-creative-assets/PPRCover_mediapolitics.png"></img>
                </div>
            </div>
            <div className="section ceramics">
                <div className="section-heading">Ceramics</div>
                <div className="section-sub-heading">Created at Choplet Ceramics Studio | Brooklyn, NY</div>
                <div className="section-row">
                    <img className="ceramics-img" src="https://storage.googleapis.com/kf-creative-assets/ceramics_4.png"></img>
                    <img className="ceramics-img" src="https://storage.googleapis.com/kf-creative-assets/ceramics_3.png"></img>
                    <img className="ceramics-img" src="https://storage.googleapis.com/kf-creative-assets/ceramics_5.png"></img>
                </div>
            </div>
        </div>
    )
}
export default CreativeWork