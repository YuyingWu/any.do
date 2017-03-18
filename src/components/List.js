import React from "react";
import { list } from "../data/list";
import { details } from "../data/details";
import styles from '../assets/styles/components/list.less';

export const List = (props) => {
    // test
    const listId = 1;
    // const listId = props.params.id;
    // test
    const { name } = list.find( item => item.id == listId);

    const { toDoList, doneList } = details[listId];

    return (
        <section className="section-list">
            <header>
                <h1>{ name }</h1>
            </header>

            <section className="main">
                <ul className="to-do-list">
                { toDoList.map((item, index) =>
                    <li key={ index }>{ item.title }</li>
                ) }
                </ul>

                <ul className="done-list">
                { doneList.map((item, index) =>
                    <li key={ index }>
                        <p>
                            <span className="title">{ item.title }</span>
                            <span className="btn-x">x</span>
                        </p>
                        <div className="line-through"></div>
                    </li>
                ) }
                </ul>
            </section>
        </section>
    );
};
