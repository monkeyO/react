import React, { Component } from 'react';
import { Row, Col, Card, Badge } from 'antd';
import './index.less';
import allList from '../../utils/article';
export default class Photo extends Component {
    constructor(props) {
        super(props)
        document.title = "学习馆";
        this.state = {
            showIndex: 0,
            contentList: allList.jsList,
            typeList: allList.typeList
        }
    }
    //切换tab
    makeTab = (index) => {
        let getData;
        switch (index) {
            case 0:
                getData = allList.jsList
                break;
            case 1:
                getData = allList.reactList
                break;
            case 2:
                getData = allList.vueList
                break;
            default:
                getData = allList.htmlList
        }
        this.setState(
            {
                showIndex: index,
                contentList: getData
            }
        )
    }
    render() {
        return (
            <div className="wrapper">
                <Row gutter={{ xs: 2, sm: 2, md: 24 }} type="flex" justify="center">
                    <Col xs={{ span: 22, order: 2 }} sm={{ span: 22, order: 2 }} md={{ span: 16, order: 1 }} xl={{ span: 14, order: 1 }} className="know-content">
                        <section className="content-header">
                            文章列表
                        </section>
                        <ul>
                            {
                                this.state.contentList.map((item, index) => {
                                    let thisStyle = {
                                        animationDelay: `${`0.` + index}s`
                                    }
                                    return (
                                        <li className="content-item" key={index} style={thisStyle}>
                                            <Card>
                                                <h2>
                                                    <a href={item.friendlink} target="_blank" rel="noopener noreferrer">{item.title}</a>
                                                </h2>
                                                <p>{item.guild}</p>
                                                <div className="info">
                                                    <span className="auth">{item.auth}</span> <span className="time">{item.time}</span><Badge className="badge" count={`${item.type}`} style={{ backgroundColor: '#52c41a' }} ></Badge>
                                                </div>
                                                <div className="tips">阅读量：<i>{item.read}</i></div>
                                            </Card>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                    <Col xs={{ span: 22, order: 1 }} sm={{ span: 22, order: 1 }} md={{ span: 6, order: 2 }} xl={{ span: 4, order: 2 }} className="know-list">
                        <section className="list-header">
                            文章主题
                        </section>
                        <ul>
                            {
                                this.state.typeList.map((item, index) => {
                                    return (
                                        <li className={`list-item ${index === this.state.showIndex ? "active" : ""}`} key={index} onClick={() => this.makeTab(index)}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </div >
        )
    }
}