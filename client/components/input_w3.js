import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { history } from '../redux'
// import Head from './head'
import Header from './header_w3'

const Input = (props) => {
  const [userName, setUserName] = useState()
  const onChange = (e) => {
    setUserName(e.target.value)
  }

  return (
    <div>
      <Header />
      <div className="title">
        <input type="url" id="input-field" value={userName} onChange={onChange} />
        <button
          type="submit"
          id="search-button"
          onClick={() => {
            history.push(`/${userName}`)
            props.setUserName(userName)
          }}
        >
          Go
        </button>
      </div>
    </div>
  )
}

export default React.memo(Input)
