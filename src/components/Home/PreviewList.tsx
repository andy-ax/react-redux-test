import React, { Component } from 'react';
import Preview, {priview} from './Preview';
type previewList = Readonly<{
    articleList: priview[];
}>;
class PreviewList extends Component<previewList> {
    render() {
        return this.props.articleList.map((item: priview) => (
            <Preview {...item} key={item.id} />
        ));
    }
}

export default PreviewList;