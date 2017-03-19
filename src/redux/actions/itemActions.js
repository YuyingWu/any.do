export function addItem(obj) {
    return {
        type: "ADD_ITEM",
        payload: obj
    };
}

export function doneItem(obj) {
    return {
        type: "DONE_ITEM",
        payload: obj
    };
}

export function removeItem(obj) {
    return {
        type: "REMOVE_ITEM",
        payload: obj
    };
}
