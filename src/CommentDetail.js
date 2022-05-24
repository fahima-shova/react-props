import React from 'react';

const CommentDetail = props =>{
    return (
        <div className='comment'> {/* image, name, date, the comment */}
                <a href='/' className='avatar'>
                    <img alt="avatar" src = {props.image} />
                </a> {/* for image link  */}
                <div className = 'content'> {/* name, date, the comment  */}
                    <a href='/' className ='author'>
                        {props.author}
                    </a> {/* the name  */}
                    <div className='metaData'>
                        <span className ='date'>
                            {props.timeAgo}
                        </span>
                    </div> {/* date */}
                    <div className='text'>
                        {props.comment}
                    </div> {/* the comment  */}
                </div>
            </div>
    );
}

export default CommentDetail;