import React, { Children, Component, MouseEventHandler } from "react";
import { Cell, Input } from "zarm";

class Header extends Component {
    ref: React.RefObject<any>;
    headerInputId = 'headerInput';

    constructor(props: any) {
        super(props);
        // ref
        this.ref = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                
            }
        })
    }
    
    render() {
        const props: any = this.props;
        return (
            <article>
                <input 
                    id={headerInputId}
                    ref={this.ref}
                    value={props.data} 
                    onChange={props.onChange}
                ></input>
            </article>
        );
    }
}

export default Header;
