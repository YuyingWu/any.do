import React from "react";
import {Link} from "react-router";

export const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/setting"}>Setting</Link></li>
            </ul>
        </nav>
    );
};
