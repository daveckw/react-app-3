export const createDocument = (doc, collection) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection(`${collection}`).add({
            ...doc,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_DOCUMENT_SUCCESS'
            });
        }).catch(err => {
            dispatch({
                type: 'CREATE_DOCUMENT_ERROR'
            }, err);
        });
    }
};

export const deleteDocument = (docID, collection) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection(collection).doc(docID).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
};