import styles from "../assets/styles/components/home.less";

import React from "react";
import { Link } from "react-router";
import {connect} from "react-redux";
import { initList, addList } from "../redux/actions/listActions";

class Home extends React.Component {
    componentDidMount() {
        // 仅在第一次初始化数据
        if(!this.props.listHasInit){
            this.props.initList();
        }
    }
    render() {
        const list = this.props.data;

        return (
            <section className="section-home">
                <header>
                    <h1>My List</h1>
                </header>

                <ul className="wgt-list-covers">
                { list.map((item, index) =>
                    <li key={ item.id }
                        className={ index == list.length-1 && index % 2 != 1 ? 'list-cover last-single' : 'list-cover'}>
                        <Link to={ "/list/" + item.id } activeClassName={"active"}>{ item.title }</Link>
                    </li>
                )}
                    <li key="add" className="list-cover btn-add-list"
                        onClick={() => this.props.addList()}>
                        <div>+</div>
                    </li>
                </ul>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    const data = state.list;

    return {
        data: data.data,
        listHasInit: data.listHasInit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addList: (obj) => {
            dispatch(addList('新list-做什么'));
        },
        initList: () => {
            dispatch(initList());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
