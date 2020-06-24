import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

function ProjectList({projects}) {

    // projects &&: if we have projects, do the map (short circuit)
    return (
        <div className="section">
            { projects && projects.map(project => {
                return (
                    <Link to={`/project/${project.id}`} key={project.id}>
                        <ProjectSummary project={project}></ProjectSummary>
                    </Link>
                )
            })}
        </div>

    )
}

export default ProjectList
