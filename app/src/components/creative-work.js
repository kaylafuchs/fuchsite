import React from 'react';
import '../styles/shared.scss';
import '../styles/resume.scss';
import '../styles/creative-work.scss';

// Images live in app/dist/static/creative as WebP, sized to ~2x their max display size.
// width/height are the intrinsic dimensions so the browser can reserve space before load.
const Img = ({ className, name, width, height, eager }) => (
    <img
        className={className}
        src={`/static/creative/${name}.webp`}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        alt=""
    />
);

const CreativeWork = () => {
    return (
        <div className="creative-work">
            <div className="section photography">
                <div className="section-heading">Photography</div>
                <div className="section-sub-heading">Visual Studies Senior Thesis: Street Photography</div>
                <div className="section-row mobile-column">
                    <Img className="img-tall" name="vlst_3" width={667} height={1000} eager />
                    <Img className="img-tall" name="vlst_1" width={666} height={1000} eager />
                    <Img className="img-tall" name="vlst_2" width={669} height={1000} eager />
                </div>
                <div className="section-sub-heading">Personal</div>
                <div className="section-row mobile-column">
                    <Img className="img-wide" name="personal_2" width={1000} height={667} />
                    <Img className="img-wide" name="personal_1" width={1000} height={667} />
                </div>
            </div>
            <div className="section illustration">
                <div className="section-heading">Illustration</div>
                <div className="section-sub-heading">Cover art: Penn Political Review, Spring 2013</div>
                <div className="section-row mobile-column">
                    <Img className="img-tall" name="ppr_cover" width={720} height={792} />
                </div>
            </div>
            <div className="section ceramics">
                <div className="section-heading">Ceramics</div>
                <div className="section-sub-heading">Created at Choplet Ceramics Studio | Brooklyn, NY</div>
                <div className="section-row mobile-column">
                    <Img className="ceramics-img" name="ceramics_4" width={600} height={600} />
                    <Img className="ceramics-img" name="ceramics_6" width={600} height={600} />
                    <Img className="ceramics-img" name="ceramics_7" width={600} height={600} />
                </div>
            </div>
        </div>
    )
}
export default CreativeWork
