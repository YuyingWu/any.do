// import { details } from "../../data/details";
import AV from "leancloud-storage";
const appId = 'GIgKAnr2JnUiLo4S945m2nky-gzGzoHsz';
const appKey = 'YKps0OD5c86GpTnRyWm4x4B5';
AV.init({ appId, appKey });

const itemReducer = (state = {
    itemHasInit: false,
    toDoData: [],
    doneData: []
}, action) => {
    switch (action.type) {
        case "INIT_ITEMS_FULFILLED":
            // const id = action.payload;

            // const Details = AV.Object.extend('Details');
            // const detailsItem = new Details();
            // detailsItem.set('title', '南瓜');
            //
            // detailsItem.save().then(function (savedDetailItem) {
            //     console.log('SAVE DETAILS', savedDetailItem);
            //
            //     var query = new AV.Query('List');
            //
            //     query.get(id).then(function (parent) {
            //         const relation = parent.relation('details');
            //         relation.add(savedDetailItem);
            //         parent.save();
            //         console.log('parent save');
            //     }, function (error) {
            //         // 异常处理
            //         console.error(error);
            //     });
            // }, function (error) {
            // });

            // const listInstance = AV.Object.createWithoutData('List', id);
            // const relation = listInstance.relation('details');
            // const query = relation.query();
            //
            // query.find().then(function (results) {
            //     return results;
            // }, function (error) {
            //     return error;
            // });

            if(!state.itemHasInit){
                state = {
                    ...state,
                    toDoData: [action.payload, ...state.toDoData]
                };
                break;
            }
            break;
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
