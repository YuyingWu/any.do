import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import App from "./containers/App";
import store from "./redux/stores/store";

import AV from "leancloud-storage";

const appId = 'GIgKAnr2JnUiLo4S945m2nky-gzGzoHsz';
const appKey = 'YKps0OD5c86GpTnRyWm4x4B5';
AV.init({ appId, appKey });

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app'));
