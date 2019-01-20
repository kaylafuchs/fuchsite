import React from 'react'
import '../styles/tiles.scss';

const Tiles = () => {
    return (
        // <div className="container">
            <div className="grid">
                <div className="card a">
                    <div className="name">
                        Kayla<br></br>Fuchs
                    </div>
                </div>
                <div className="card b">Resume</div>
                <div className="card c">
                    <div className="se">Software <br></br>Engineer</div>
                </div>
                <div className="card d"></div>
                <div className="card e"></div>
                <div className="card h">Brooklyn, NY</div>
                <div className="card i">Creative Work</div>
                <a className="card j round" href="mailto:kfuchs24@gmail.com">Contact
                    <svg xmlns="http://www.w3.org/2000/ svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#2E06AE" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                </a>
                <div className="card k">Projects</div>
                <div className="card l"></div>
                <div className="card m"></div>
                {/* <div className="card n round"></div> */}
                <div className="card o"></div>
                <a href="https://github.com/kaylafuchs/" className="card p" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/kaylafuchs/" target="_blank" className="card q">LinkedIn</a>
            </div>
        // </div>
    )
}
export default Tiles