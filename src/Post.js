import React, { Component } from 'react'
import Comment from './Comment'

class Post extends Component {
    render() {
        const commentParagraphs = this.props.comments.map((burrito, index)=>{
            return <Comment key={`Commment-${index}`} content={burrito} />
        })
        return(
            <article>
                <h1>{this.props.title}</h1>
                <h2>{this.props.author}</h2>
                <p>{this.props.body}</p>
                <hr></hr>
                <h3>Comments:</h3>
                {commentParagraphs}
                {/* <Comment content={this.props.comments[0]} />
                <Comment content={this.props.comments[1]} />
                <Comment content={this.props.comments[2]} /> */}
            </article>
        )
    }
}

export default Post