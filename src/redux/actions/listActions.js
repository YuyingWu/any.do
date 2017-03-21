import AV from "leancloud-storage";
const appId = 'GIgKAnr2JnUiLo4S945m2nky-gzGzoHsz';
const appKey = 'YKps0OD5c86GpTnRyWm4x4B5';
AV.init({ appId, appKey });

export function addList(title) {
    const List = AV.Object.extend('List');
    const listItem = new List();

    listItem.set('title', title);

    return {
        type: "ADD_LIST",
        payload: listItem.save().then(function (results) {
            return results
        }, function (error) {
            return error;
        })
    };
}

export function initList() {
    // 把AV返回的默认对象中的attributes提取出来，放在root上
    const parseAttr = list => {
        for(const item of list) {
            const attrs = item.attributes;

            for(const key of Object.keys(attrs)){
                item[key] = attrs[key];
            }
        }

        return list;
    };

    return {
        type: "INIT_LIST",
        payload: new AV.Query('List').find().then(function (results) {
            return parseAttr(results);
        }, function (error) {
            return error;
        })
    };
}
