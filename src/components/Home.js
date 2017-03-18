import React from "react";
import styles from "../assets/styles/components/home.less";

const list = [
    {
        name: '做什么',
        id: 1
    },
    {
        name: '要什么',
        id: 2
    },
    {
        name: 'Shopping',
        id: 3
    },
    {
        name: 'Shopping-4',
        id: 4
    },
    {
        name: 'Shopping-8',
        id: 8
    },
    {
        name: 'Shopping-5',
        id: 5
    },
    {
        name: 'Shopping-6',
        id: 6
    }
];

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
                    <p>{ item.name }</p>
                </li>
            )}
                <li key="add" className="list-cover btn-add-list">
                    <div>+</div>
                </li>
            </ul>
        </section>
    );
};
