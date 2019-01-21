import React from 'react'
import Nav from './nav'
import Resume from './resume'
import CreativeWork from './creative-work'
import Projects from './projects';


const ContentPage = (props) => {
    console.log("content", props.content);
    let content;

    if (props.content === 'resume') {
        content = <Resume/>
    } else if (props.content === 'creative-work') {
        content = <CreativeWork/>
    } else if (props.content === 'projects') {
        content = <Projects/>
    }

    return (
        <div className="container">
            <Nav/>
            {content}
        </div>
    )

}

export default ContentPage