import React, { Children, Component, MouseEventHandler } from 'react';

class Test extends Component{
    
    render() {
        const props: any = this.props
        return <article>
            <p>{props.data.COUNT}</p>
            <button onClick={props.onClick}>Add1</button>
        </article>
    }
}

export default Test;