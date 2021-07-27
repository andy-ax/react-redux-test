import React, { Children, Component, MouseEventHandler } from "react";
import { Cell, Input } from "zarm";

class Header extends Component {
    ref: React.RefObject<any>;

    constructor(props: any) {
        super(props);
        // ref
        this.ref = React.createRef();
    }
    
    render() {
        const props: any = this.props;
        return (
            <article>
                <input 
                    ref={this.ref}
                    value={props.data} 
                    onChange={props.onChange}
                ></input>
            </article>
        );
    }
}

export default Header;
