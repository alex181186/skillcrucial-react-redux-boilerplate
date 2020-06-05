import React from 'react'
import { Link } from 'react-router-dom'
// import Head from './head'

const Index = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard">Go To Root</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

export default React.memo(Index)
