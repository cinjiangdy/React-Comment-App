import React from 'react'

import Comments from './Comments'

const CommentContainer = props => {
    const {comments, setComments} = props
    return (
        <ul>
            {
                comments.map((item) => <Comments item={item} comments={comments} setComments={setComments}/>)
            }
        </ul>
    )
}

export default CommentContainer