// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, dispatch] = React.useReducer(
    countReducer,
    {
      value: initialCount,
    },
    init,
  )
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  function init({value}) {
    return {
      value: value,
      loading: true,
    }
  }

  function countReducer(state, {type, step}) {
    if (type === 'INCREMENT') {
      return {
        value: state.value + step,
        loading: false,
      }
    }
    return {
      ...state,
      loading: false,
    }
  }

  const {loading} = state
  console.log('loading is: ', loading)

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{state.value}</button>
}

function App() {
  return <Counter />
}

export default App
