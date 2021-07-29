import React, { Children, Component, MouseEventHandler } from 'react';
import {List, Radio} from 'antd';
import {CloseOutlined, CheckCircleOutlined, CheckCircleTwoTone, ClockCircleOutlined} from '@ant-design/icons'
import classNames from 'classnames'
import mainCss from './Main.module.scss';
class Main extends Component{
    liRender(list: any[]) {
        const props: any = this.props
        console.log('')
        return list.map((data, i) => {
            return <List.Item key={data.text}
            
                onClick={props.onClick.bind(this, data, i)}
            >
                {
                    data.status === 'wait' ? <div className={mainCss.iconDiv}></div> : data.status === 'invalid' ? <CheckCircleTwoTone className={mainCss.iconStyle} twoToneColor="#ccc" /> : <CheckCircleOutlined className={mainCss.iconStyle} />
                }{data.text}
                <CloseOutlined 
                    title="删除"
                    className={classNames({
                        [mainCss.iconStyle]: true,
                        [mainCss.floatRight]: true
                    })} 
                    onClick={props.delete.bind(this, i)} 
                />
                <ClockCircleOutlined
                    title="设置过期"
                    className={classNames({
                        [mainCss.iconStyle]: true,
                        [mainCss.floatRight]: true
                    })} 
                    onClick={props.invalid.bind(this, i)} 
                />
            </List.Item>
        })
    }

    liKey(data: any) {
        return "li-key-"+data.text;
    }

    render() {
        const props: any = this.props
        return <article>
            <List
                size="large"
                bordered
                >
                {this.liRender(props.data)}
            </List>
            {/* <ul>{this.liRender()}</ul> */}
        </article>
    }
}

export default Main;