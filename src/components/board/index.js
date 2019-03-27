import React, { Component } from 'react';
import { Row, Col, Icon, Modal, notification } from 'antd';
import allBoard from '../../utils/board';
import Forms from './form';
import './index.less';
export default class Board extends Component {
    constructor(props) {
        super(props);
        document.title = "留言板";
        this.state = {
            visible: false
        }
    }
    //展示model
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    //model取消
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    //model确定
    handleOk = () => {
        if (this.formRef.getItemsValue()) {
            this.setState({
                visible: false
            })
            notification.open({
                message: '提交成功',
                description: '等待审核...',
                icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            });
        } else {

        }
    }
    render() {
        return (
            <div className="wrapper">
                <Row gutter={{ xs: 2, sm: 2, md: 24 }} type="flex" justify="center">
                    <Col xs={22} sm={22} md={18} xl={16} >
                        <section className="board-header">
                            <span>欢迎留言</span><Icon type="select" onClick={this.showModal} />
                        </section>
                        <ul className="board-list">
                            {
                                allBoard.map((item, index) => {
                                    let thisStyle = {
                                        animationDelay: `${`0.` + index}s`
                                    }
                                    return (
                                        <li className="board-item" key={index} style={thisStyle}>
                                            <div className="board-avatar">
                                                <span className="board-avatar-image">
                                                    <img src={item.avatar} alt={item.name}></img>
                                                </span>
                                            </div>
                                            <div className="board-content">
                                                <div className="board-content-name">
                                                    <span>{item.name}</span><span>{item.time}</span>
                                                </div>
                                                <div className="board-content-detail">
                                                    <p>{item.content}</p>
                                                </div>
                                                <div className="board-content-action">
                                                    <span><Icon type="like" /> {item.good}</span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>
                <Modal
                    title="请填写留言信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="确定"
                >
                    <Forms wrappedComponentRef={(form) => this.formRef = form} />
                </Modal>
            </div>
        )

    }
}
