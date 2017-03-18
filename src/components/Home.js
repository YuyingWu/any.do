import React from "react";
import { Link } from "react-router";
import styles from "../assets/styles/components/home.less";
import { list } from "../data/list";

export const Home = (props) => {
    return (
        <section className="section-home">
            <header>
                <h1>My List</h1>
            </header>

            <ul className="wgt-list-covers">
            { list.map((item, index) =>
                <li key={ item.id }
                    className={ index == list.length-1 && index % 2 != 1 ? 'list-cover last-single' : 'list-cover'}>
                    <Link to={ "/list/" + item.id } activeClassName={"active"}>{ item.name }</Link>
                </li>
            )}
                <li key="add" className="list-cover btn-add-list">
                    <div>+</div>
                </li>
            </ul>
        </section>
    );
};
