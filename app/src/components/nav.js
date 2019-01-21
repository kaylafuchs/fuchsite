import React from 'react'
import '../styles/shared.scss';
import '../styles/nav.scss';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Link to="/" className="navbar">
            <svg className="btn-back" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path fill="#2E06AE" d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
            <div className="kf">Kayla Fuchs</div>
        </Link>
    )
}
export default Nav