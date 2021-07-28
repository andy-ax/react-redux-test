import React, { Children, Component, MouseEventHandler } from "react";
import {Button} from 'antd';
import 'antd/dist/antd.css';
class Tooltip extends Component {
    ref: React.RefObject<any>;
    headerInputId = 'headerInput';

    constructor(props: any) {
        super(props);
        // ref
        this.ref = React.createRef();
    }

    componentDidMount() {
    }
    
    render() {
        const props: any = this.props;
        return (
            <article>
                <Button size="small">全部完成</Button>
                <Button size="small">全部取消完成</Button>
                <Button size="small">删除过期</Button>
                <Button size="small">删除全部</Button>
                <Button size="small">设置全部过期</Button>
            </article>
        );
    }
}

export default Tooltip;
