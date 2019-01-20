import React from 'react'
import '../styles/tiles.scss';


const Tiles = () => {
    return (
        <div className="grid">
            <div className="card row-2-3 col-3-3 c-1">Three</div>
            <div className="card row-4-3 col-6-3 c-1">Four</div>
            <div className="card row-5-2 col-2-2 c-1">Five</div>
            <div className="card row-5-1 col-4-1 c-1">Six</div>
            <div className="card row-5-1 col-5-1 c-1">Seven</div>
            <div className="card row-6-1 col-4-2 c-1">Eight</div>
            <div className="card row-6-1 col-4-2 c-1">Nine</div>
        </div>
    )
}
export default Tiles