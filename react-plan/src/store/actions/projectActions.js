export const createProject = (project) => {
    // pause, make async db call
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project, //project, content
            authorFirst: 'gang',
            authorLast: 'yong',
            authordId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error });
        })
        
    }
};