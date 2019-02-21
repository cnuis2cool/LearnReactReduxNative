
// Example 11 - Full fledged App.
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./reducers/store";

import App from "./App";

// Step 1
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);


//-----------------------------
/* End of Example 11 */
//-----------------------------
