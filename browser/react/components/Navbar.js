import React from 'react';
import { Link } from 'react-router';


export default class Navbar extends React.Component {

	constructor() {
		super();

		this.state = {
			menuItems: ['about', 'resume', 'thesis', 'contact']
		}
	}

	render() {
		const menuItems = this.state.menuItems;

		return (
			<div className="nav">
				<div><Link to={'/'}>Kayla Fuchs</Link></div>
				<ul>
					{
						menuItems.map(item => <li key={item} className="menu-item"><Link to={`/${item}`}>{item}</Link></li>)
					}
				</ul>
			</div>

		)
	}
}