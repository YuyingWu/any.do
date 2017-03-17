import React from "react";

import { Nav } from "./Nav";

export class Layout extends React.Component {
    render() {
        return (
            <section>
                <Nav />

                <div className="main">
                    {this.props.children}
                </div>
            </section>
        );
    }
}
