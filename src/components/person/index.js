import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';
import allList from '../../utils/person';
export default class Person extends Component {
    constructor(props) {
        super(props)
        document.title = "个人中心"
    }
    render() {
        return (
            <div className="wrapper">
                <div className="person-avatar">
                    <img src="http://pji2p11nw.bkt.clouddn.com/my.png" alt="头像"></img>
                </div>
                <div className="person-intro">
                    <Row gutter={{ xs: 2, sm: 2, md: 10 }} type="flex" justify="center">
                        {
                            allList.map((item, index) => {
                                let thisStyle = {
                                    animationDelay: `${`0.` + index*1}s`
                                }
                                return (
                                    <Col  xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 6 }} xl={{ span: 5 }} key={index}>
                                        <div className="intro-item" style={thisStyle}>
                                            {item.name}
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>

        )
    }
}