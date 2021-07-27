import React, { Children, Component, MouseEventHandler } from 'react';
import {List, Radio} from 'antd';
class Main extends Component{
    liRender(data: any) {
        const props: any = this.props
        return <List.Item key={data.text}>
            <Radio
                checked={data.status === 'completed'}
                disabled={data.status === 'invalid'}
                onChange={props.onChange(data)}
            >{data.text}</Radio>
        </List.Item>
    }

    render() {
        const props: any = this.props
        return <article>
            <List
                size="large"
                bordered
                dataSource={props.data}
                renderItem={this.liRender.bind(this)}
                />
            {/* <ul>{this.liRender()}</ul> */}
        </article>
    }
}

export default Main;