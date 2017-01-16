import React from 'react';

export default class Thesis extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			photos: [
				 { 
				 	id: '1', 
				 	url: 'https://s3.amazonaws.com/kaylafuchsportfolio/thesis-1.png'
				 },
				 { 
				 	id: '2', 
				 	url: 'https://s3.amazonaws.com/kaylafuchsportfolio/thesis-2.png'
				 },
				 { 
				 	id: '3', 
				 	url: 'https://s3.amazonaws.com/kaylafuchsportfolio/thesis-3.png'
				 },
				 { 
				 	id: '4', 
				 	url: 'https://s3.amazonaws.com/kaylafuchsportfolio/thesis-4.png'
				 },
				 { 
				 	id: '5', 
				 	url: 'https://s3.amazonaws.com/kaylafuchsportfolio/thesis-5.png'
				 }
			]
		}

	}

	render() {
		const photos = this.state.photos;

		return (
			<div>
				<div className="placeholder">This is my senior thesis</div>
				{	
					photos.map(photo => <img src={photo.url} className="thesis-img" key={photo.id}/>)
				}
			</div>
		)
	}

}
