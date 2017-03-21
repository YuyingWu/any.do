import AV from "leancloud-storage";
const appId = 'GIgKAnr2JnUiLo4S945m2nky-gzGzoHsz';
const appKey = 'YKps0OD5c86GpTnRyWm4x4B5';
AV.init({ appId, appKey });

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

export function initItems(id) {
    const listInstance = AV.Object.createWithoutData('List', id);
    const relation = listInstance.relation('details');
    const query = relation.query();

    return {
        type: "INIT_ITEMS",
        payload: query.find().then(function (results) {
            return results;
        }, function (error) {
            return error;
        })
    };
}
