import { list } from "../../data/list";

const listReducer = (state = {
    data: list
}, action) => {
    switch (action.type) {
        case "ADD_LIST":
            state = {
                ...state,
                data: [...state.data, action.payload]
            };
            break;
    }
    return state;
};

export default listReducer;
