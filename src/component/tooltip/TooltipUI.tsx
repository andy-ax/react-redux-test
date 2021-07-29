import React, { Children, Component, MouseEventHandler } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import tooltipCss from "./Tooltip.module.scss";
class Tooltip extends Component {
    ref: React.RefObject<any>;
    headerInputId = "headerInput";

    constructor(props: any) {
        super(props);
        // ref
        this.ref = React.createRef();
    }

    componentDidMount() {}

    render() {
        const props: any = this.props;
        return (
            <article className={tooltipCss.buttonContainer}>
                <Button 
                    className={tooltipCss.normalButton} 
                    onClick={props.allCompleted}
                    size="small"
                >
                    全部完成
                </Button>
                <Button 
                    className={tooltipCss.normalButton} 
                    onClick={props.allWait}
                    size="small"
                >
                    全部取消完成
                </Button>
                <Button 
                    className={tooltipCss.normalButton} 
                    onClick={props.deleteInvalid}
                    size="small"
                >
                    删除过期
                </Button>
                <Button 
                    className={tooltipCss.normalButton} 
                    onClick={props.deleteAll}
                    size="small"
                >
                    删除全部
                </Button>
                <Button 
                    className={tooltipCss.normalButton} 
                    onClick={props.setAllInvalid}
                    size="small"
                >
                    设置全部过期
                </Button>
            </article>
        );
    }
}

export default Tooltip;
