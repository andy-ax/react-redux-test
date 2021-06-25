import React, { Component } from 'react';
import './Preview.scss';
export type priview = {
    title: string;
    link: string;
    date: any;
    description: any;
    id?: any;
};
class Preview extends Component<Readonly<priview>>{
    render() {
        return (
            <article className="article-preview-item">
                <h1 className="title">{this.props.title}</h1>
                <span className="date">{this.props.date}</span>
                <p className="desc">{this.props.description}</p>
            </article>
        );
    }
}

export default Preview;