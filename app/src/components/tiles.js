import React from 'react'
import '../styles/tiles.scss';


const Tiles = () => {
    return (
        <div className="tile-container">
            <div className="tile-col">
                <div className="tile-row">
                    <div className="tile tile-invisible"></div>
                    <div className="tile tile-xl a">Two</div>
                </div>
                <div className="tile-row baseline">
                    <div className="tile-col inner">
                        <div className="tile tile-invisible"></div>  
                    </div>
                    <div className="tile-col inner wide">
                        <div className="tile-row right">
                            <div className="tile b">Three</div>
                        </div>
                    </div>
                    <div className="tile-col inner">
                        <div className="tile-row around baseline">
                            <div className="tile c">Three.1</div>
                            <div className="tile c">Three.2</div>
                        </div>
                        <div className="tile-row">
                            <div className="tile g">Three.3</div>
                        </div>
                    </div>
                </div>
                {/* <div className="tile tile-m tile-invisible">
                    <div className="tile-col inner">
                        <div className="tile tile-s tile-invisible">Three.1</div>
                        <div className="tile tile-s tile-invisible">Three.2</div>
                    </div>
                    <div className="tile-col inner">
                        <div className="tile tile-s b">Three.3</div>
                        <div className="tile tile-s c">Three.4</div>
                    </div>
                </div> */}
                <div className="tile-row">
                    <div className="tile-col inner">
                        <div className="tile tile-invisible"></div>  
                    </div>
                    <div className="tile-col inner">
                        <div className="tile-row right">
                            <div className="tile tile-invisible"></div> 
                            <div className="tile d">Four</div>
                        </div>
                    </div>
                </div>          
            </div>
            <div className="tile-col">
                {/* <div className="tile tile-s tile-invisible">One</div> */}
                {/* <div className="tile">Five</div> */}
                <div className="tile tile-l d">Six</div>
                <div className="tile tile-s ">Seven</div>
                <div className="tile">Eight</div>
            </div>
            <div className="tile-col">
                <div className="tile tile-invisible">
                    <div className="tile-col inner">
                        <div className="tile tile-s tile-invisible"></div>
                        <div className="tile tile-m">Nine.2</div>
                    </div>
                    <div className="tile-col inner">
                    <div className="tile tile-s tile-invisible"></div>
                    </div>
                </div>
                <div className="tile tile-xl">Ten</div>
                <div className="tile tile-invisible">Eleven</div>
                {/* <div className="tile">Twelve</div>
                <div className="tile">Thirteen</div>
                <div className="tile">Fourteen</div> */}
            </div>
        </div>
    )
}
export default Tiles