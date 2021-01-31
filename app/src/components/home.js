import React from 'react';
import '../styles/shared.scss';
import '../styles/home.scss';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    isMobile = () => !!navigator.maxTouchPoints || window.innerWidth <= 600;

    state = { mobile: this.isMobile() };

    checkDeviceType = () => {
        this.setState({ mobile: this.isMobile() });
    }

    componentWillMount(){
        this.resizeListener = window.addEventListener("resize", this.checkDeviceType)
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.checkDeviceType)
    }

    render() {
        return this.state.mobile
            ? (
                <div className="grid homepage">
                    <div className="tile a">Kayla<br></br>Fuchs</div>
                    <div className="mobile-row">
                        <div className="tile k round"></div>
                        <div className="tile c">
                            <div className="rotate">Software<br></br>Engineer</div>
                        </div>
                    </div>
                    <div className="mobile-row">
                        <div className="tile location-mobile f">Brooklyn, NY</div>
                    </div>
                    <div className="mobile-row">
                        <Link to="/resume" className="tile link-mobile b">Resume</Link>
                    </div>
                    <div className="mobile-row">
                        <a href="https://www.linkedin.com/in/kaylafuchs/" target="_blank" className="tile link-mobile n">LinkedIn</a>
                    </div>
                    <div className="mobile-row">
                        <Link to="/creative-work" className="tile link-mobile g">Creative Work</Link>
                    </div>
                    <div className="mobile-row">
                        <a href="https://github.com/kaylafuchs/" className="tile link-mobile m" target="_blank">Github</a>
                    </div>
                </div>
            ) : (
                <div className="grid">
                    <div className="tile a">Kayla<br></br>Fuchs</div>
                    <Link to="/resume" className="tile b">Resume</Link>
                    <div className="tile d"></div>
                    <div className="tile e"></div>
                    <div className="tile f">Brooklyn, NY</div>
                    <Link to="/creative-work" className="tile g">Creative Work</Link>
                    <a className="tile h round" href="mailto:kfuchs24@gmail.com">Contact
                        <svg xmlns="http://www.w3.org/2000/ svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#2E06AE" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                    </a>
                    <Link to="/projects" className="tile i">Projects</Link>
                    <div className="tile j"></div>
                    <div className="tile k round"></div>
                    <div className="tile c">
                        <div className="rotate">Software<br></br>Engineer</div>
                    </div>
                    <div className="tile l"></div>
                    <a href="https://github.com/kaylafuchs/" className="tile m" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/kaylafuchs/" target="_blank" className="tile n">LinkedIn</a>
                </div>
            );
    }
}

export default Home;
