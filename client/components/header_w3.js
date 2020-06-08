import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div id="repository-name">Repository Name</div>
      <Link to="/" id="go-back">
        Go Back
      </Link>
      <Link to="" id="go-repository-list">
        Go repository list
      </Link>
    </div>
  )
}
export default Header
