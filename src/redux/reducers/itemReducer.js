import { details } from "../../data/details";

const itemReducer = (state = {
    toDoData: details[1].toDoList,
    doneData: details[1].doneList
}, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            state = {
                ...state,
                toDoData: [action.payload, ...state.toDoData]
            };
            break;
        case "DONE_ITEM":
            const payload = action.payload;
            state = {
                ...state,
                toDoData: state.toDoData.filter(item => payload.title != item.title),
                doneData: [payload, ...state.doneData]
            };
            break;
        case "REMOVE_ITEM":
            state = {
                ...state,
                doneData: state.doneData.filter(item => action.payload.title != item.title)
            };
            break;
    }
    return state;
};

export default itemReducer;
