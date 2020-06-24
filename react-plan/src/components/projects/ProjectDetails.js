import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

function ProjectDetails(props) {
    const { project, auth } = props;

    if(!auth.uid){
        return <Redirect to='/signin'></Redirect>
    }
    if(project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>

                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirst} {project.authorLast}</div>
                        <div>date</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
        
    }
}

// do not get prop access automatically - must pass in manually
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    // if projects exist, return project id
    const project = projects ? projects[id] : null;
    return {
         project: project,
         auth: state.firebase.auth
    }
}

export default compose (
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'projects' }
  ])
)(ProjectDetails)
