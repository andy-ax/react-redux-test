import React, { Children, Component, MouseEventHandler } from 'react';
import {List, Radio} from 'antd';
import {CloseOutlined} from '@ant-design/icons'
class Main extends Component{
    liRender(list: any[]) {
        const props: any = this.props
        console.log('')
        return list.map((data, i) => {
            return <List.Item key={data.text}
            
                onClick={props.onClick.bind(this, data, i)}
            >
                <Radio
                    checked={data.status === 'completed'}
                    disabled={data.status === 'invalid'}
                ></Radio>{data.text}
                <CloseOutlined />
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