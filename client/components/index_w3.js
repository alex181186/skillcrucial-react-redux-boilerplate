import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { history } from '../redux'
// import Head from './head'

const Index = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="title">
      <input type="url" id="input-field" value={value} onChange={onChange} />
      <Link to={value}>
        <button type="submit" id="search-button">
          Go
        </button>
      </Link>
    </div>
  )
}

export default React.memo(Index)
