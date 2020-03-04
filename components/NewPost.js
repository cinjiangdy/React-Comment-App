import React, {useState} from 'react'

const NewPost = props => {
    const [inputValueName, setInputValueName] = useState('')
    const [inputValueComment, setInputValueComment] = useState('')

    const {comments, setComments} = props

    const handleButtonClick = () => {
        const copy = comments.slice()
        copy.push([inputValueName, ": ", inputValueComment])
        setComments(copy)
    }

    return (
        <>
            <h2>Author</h2>
            <input value={inputValueName} 
            onChange={e => setInputValueName(e.target.value)} type="text"/>
            <h2>Comment</h2>
            <input value={inputValueComment} 
            onChange={e => setInputValueComment(e.target.value)} type="text" style={{width: "370px"}}/>
            {
                (inputValueName.length > 0 && inputValueComment.length > 0) &&
                <button onClick={handleButtonClick}>Submit</button>
            }
        </>
    )
}

export default NewPost