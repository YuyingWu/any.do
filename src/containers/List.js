import styles from '../assets/styles/components/list.less';

import React from "react";
import {connect} from "react-redux";
import { list } from "../data/list";
import { details } from "../data/details";

import { addItem, doneItem, removeItem } from "../redux/actions/itemActions";

class List extends React.Component {
    render() {
        // test
        const listId = 1;
        // const listId = props.params.id;
        // test
        const { name } = list.find( item => item.id == listId);

        const toDoList = this.props.toDoData;
        const doneList = this.props.doneData;

        return (
            <section className="section-list">
                <header>
                    <h1>{ name }</h1>
                </header>

                <section className="main">
                    <ul className="to-do-list">
                    { toDoList.map((item, index) =>
                        <li key={ index }
                            onDoubleClick={ () => this.props.doneItem(item.title) }>{ item.title }</li>
                    ) }
                    </ul>

                    <ul className="done-list">
                    { doneList.map((item, index) =>
                        <li key={ index }>
                            <p>
                                <span className="title">{ item.title }</span>
                                <span className="btn-x"
                                    onClick={ () => this.props.removeItem(item.title) }>x</span>
                            </p>
                            <div className="line-through"></div>
                        </li>
                    ) }
                    </ul>

                    <div onClick={ this.props.addItem }>添加</div>
                </section>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    const data = state.item;

    return {
        toDoData: data.toDoData,
        doneData: data.doneData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (obj) => {
            dispatch(addItem({
                title: '黄瓜'
            }));
        },
        doneItem: (title) => {
            dispatch(doneItem({
                title: title
            }));
        },
        removeItem: (title) => {
            dispatch(removeItem({
                title: title
            }));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
