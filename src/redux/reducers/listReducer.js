const listReducer = (state = {
    listHasInit: false,
    data: []
}, action) => {
    switch (action.type) {
        case "ADD_LIST_FULFILLED":
            state = {
                ...state,
                data: [...state.data, action.payload]
            };
            break;
        case "INIT_LIST_FULFILLED":
            state = {
                ...state,
                listHasInit: true,
                data: [...state.data, ...action.payload]
            };
            break;
    }
    return state;
};

export default listReducer;
