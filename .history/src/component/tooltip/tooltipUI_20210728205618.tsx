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
                
            </article>
        );
    }
}

export default Tooltip;
