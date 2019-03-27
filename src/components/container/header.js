import React,{ Component}  from 'react';
import {Layout} from 'antd';
import './header.less';
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            order:100
        };
    }
    render(){
       return(
           <Layout className="header">
               {this.props.model} 
           </Layout>
       )
    }
}
