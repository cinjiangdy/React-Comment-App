import React, {useState} from 'react'

import Title from './components/Title'
import NewPost from './components/NewPost'
import CommentContainer from './components/CommentContainer'

const App = () => {
    const [comments, setComments] = useState([])
    return (
        <>
            <Title/>
            <NewPost comments={comments} setComments={setComments}/>
            <CommentContainer comments={comments} setComments={setComments}/>
        </>
    )
  }

export default App