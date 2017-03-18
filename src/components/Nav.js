import React from "react";
import {Link} from "react-router";

import styles from "../assets/styles/components/nav.less";

export const Nav = (props) => {
    return (
        <nav className="wgt-nav">
            <ul>
                <li><Link to={"/"} activeClassName={"active"}>Home</Link></li>
                <li><Link to={"/setting"} activeClassName={"active"}>Setting</Link></li>
            </ul>
        </nav>
    );
};
