import React from 'react'

function ProjectSummary(props) {
    const { project: { title, content } } = props;

    return (
        <div className="card z-depth-0">
            <div className="grey-text text-darken-3 card-content">
                <span className="card-title">{title}</span>
                <p>posted by me</p>
                <p className="grey-text">the date</p>
            </div>
        </div>
    )
}

export default ProjectSummary
