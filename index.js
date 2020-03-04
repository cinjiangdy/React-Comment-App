import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './App'

const defaultState = []

const reducer = (state = defaultState, action) => {
    const stateCopy = state.slice()
    switch (action.type) {
        case 'ADD_COMMENT':
            const newComment = action.comment
            stateCopy.push(newComment)
            break;
    }
    return stateCopy
}

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-root')
)
 