import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './content.less';
import { Icon } from 'antd';
import allContent from '../../utils/content';
import { getUser } from '../../axios/api';

export default class Content extends Component {
    state = {
        showIndex: 1000
    }
    componentWillMount() {
		this.init();
    }
	//数据初始化
	async init(){
	   let res = await getUser();
	   
	}
    //鼠标悬浮
    makeOver(index) {
        this.setState({
            showIndex: index
        })
    }
    //鼠标移除
    makeOut(){
        this.setState({
            showIndex: 1000
        })
    }
    render() {
        return (
            <div className="content">
                <ul className="content-list">
                    {allContent.map((item, index) => {
						
                        return (<li key={item.name} onMouseOver={() => this.makeOver(index)} onMouseOut={() => this.makeOut(index)}>
                            <div className="info">
                                <h2>{item.name}</h2>
                                <p>{item.descrip}</p>
                            </div>
                            <span className="line"></span>
                            <Link className="btn" to={`/${item.url}`}> </Link>
                            <Icon type={item.icon} spin={this.state.showIndex === index ? false : true} />
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}