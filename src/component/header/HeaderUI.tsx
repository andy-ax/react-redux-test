import React, { Children, Component, MouseEventHandler } from "react";
import {Input} from 'antd';
import 'antd/dist/antd.css';
class Header extends Component {
    ref: React.RefObject<any>;
    headerInputId = 'headerInput';

    constructor(props: any) {
        super(props);
        // ref
        this.ref = React.createRef();
    }

    componentDidMount() {
        // document.addEventListener('keydown', e => {
        //     const props: any = this.props;
        //     if (e.keyCode === 13 && document?.activeElement?.id === this.headerInputId) {
        //         props.onEnter(props.data);
        //     }
        // })
    }
    
    render() {
        const props: any = this.props;
        return (
            <article>
                <Input 
                    allowClear
                    id={this.headerInputId}
                    ref={this.ref}
                    value={props.data} 
                    onChange={props.onChange}
                    onPressEnter={props.onEnter}
                ></Input>
            </article>
        );
    }
}

export default Header;
