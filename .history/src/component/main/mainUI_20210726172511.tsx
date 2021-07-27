import React, { Children, Component, MouseEventHandler } from 'react';
import { Cell, Input } from 'zarm';

class Main extends Component{
    liRender() {
        const props: any = this.props
        return props?.data?.map((data: any) => {
            return <li>{data.text}</li>
        })
    }

    render() {
        const props: any = this.props
        return <article>
            <ul>{this.liRender()}</ul>
        </article>
    }
}

export default Main;