import React, { useState } from 'react'

import CommentContainer from './CommentContainer'

  const Comments = props => {
    const {item} = props
    
    // counter for upvote and downvote
    const [count, setCount] = useState(0)

    const [inputValueName, setInputValueName] = useState('')
    const [inputValueComment, setInputValueComment] = useState('')

    // booleans for tracking reply buttons
    const [replyIsClicked, setReply] = useState(false)
    const [newReplyEntered, setNewReply] = useState(false)
    const [replyingComment, setReplyingComment] = useState(false)
    
    // handle reply
    const [replies, setReplies] = useState([])

    const handleButtonClick = () => {
        setReply(true)
        setNewReply(true)
    }

    const handleCommentReply = () => {
        setReplyingComment(true)
        setNewReply(false)
        const copy = replies.slice()
        copy.push([inputValueName, ': ', inputValueComment])
        setReplies(copy)
     }

    return (
        <li>
            {item} 
            <p>{count}</p>
            <button onClick = {() => setCount(count + 1)}>⬆️</button>
            <button onClick = {() => setCount(count - 1)}>⬇️</button>
            <button onClick={handleButtonClick}>Reply</button>
            
            {replyIsClicked &&
                <> 
                    {
                        newReplyEntered &&
                        <> 
                    <h3>Author</h3>
                    <input value={inputValueName} 
                    onChange={e => setInputValueName(e.target.value)} type="text"/>
                    <h3>Comment</h3>
                    <input value={inputValueComment} 
                    onChange={e => setInputValueComment(e.target.value)} type="text" style={{width: '370px'}}/>
                    {
                        (inputValueName.length > 0 && inputValueComment.length > 0) &&
                        <button onClick={handleCommentReply}>Reply</button>
                    }
                    </>
                    }
                    {
                        replyingComment &&
                        <CommentContainer comments={replies} setComments={setReplies}/>
                    }
                </>
            }
        </li>
    )
}

export default Comments