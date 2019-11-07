export const createUser = (user) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...user,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_USER_SUCCESS'
            });
        }).catch(err => {
            dispatch({
                type: 'CREATE_USER_ERROR'
            }, err);
        });
    }
};

export const deleteUser = (userID) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("users").doc(userID).delete().then(function() {
            console.log("User successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing user: ", error);
        });
    }
};