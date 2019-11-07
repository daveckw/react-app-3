const initState = {}

const documentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DOCUMENT_SUCCESS':
            console.log('create document success');
            return state;
        case 'CREATE_DOCUMENT_ERROR':
            console.log('create document error');
            return state;
        default:
            return state;
    }
};

export default documentReducer;