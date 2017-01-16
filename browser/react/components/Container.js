import React from 'react';
import Navbar from './Navbar';


const Container = (props) => (
	<div>
		<Navbar />
		{ props.children }
	</div>
)

export default Container;
