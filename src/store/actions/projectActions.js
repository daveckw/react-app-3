export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT_SUCCESS'
            });
        }).catch(err => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR'
            }, err);
        });
    }
};

export const deleteProject = (projectID) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("projects").doc(projectID).delete().then(function() {
            console.log("Project successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing project: ", error);
        });
    }
};