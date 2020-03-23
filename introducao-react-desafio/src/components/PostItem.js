import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        const post = this.props;
        console.log(post);
        return (
            <div className="post">
                <div className="post-header">
                    <img className="avatar" src={post.author.avatar}></img>
                    <div className="details">
                        <span>{post.author.name}</span >
                        <span>{post.date}</span>
                    </div>
                </div>
                <p className="post-content">{post.content}</p>
                <div className="post-comments">
                    <div className="divider" />
                    {post.comments.map((coment) => (
                        <div key={coment.id} className="comment">
                            <img className="avatar" src={coment.author.avatar} />
                            <p>
                                <span>{coment.author.name}</span>
                                {coment.content}
                            </p>
                        </div>))}

                </div>
            </div>

        )
    }
}

export default PostItem;