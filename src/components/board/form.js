
import React, { Component } from 'react';
import { Input, Icon, Form } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
class Forms extends Component {
    getItemsValue = () => {
        let getVal;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                getVal = values;
            }
        });
        return getVal;
    }
    getDemo = () =>{
       return "测试信息";
    }
    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Form className="login-form" >
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '用户名必填测试!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('textarea', {
                        rules: [{ required: true, message: '内容必填!' }],
                    })(
                        <TextArea rows={4} placeholder="内容" />
                    )}
                </FormItem>
            </Form>
        )
    }
}
export default Form.create()(Forms);
