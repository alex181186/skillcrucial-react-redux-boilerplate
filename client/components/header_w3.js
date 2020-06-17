import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()
  const linkRepo = `/${userName}`
  return (
    <div>
      <div id="repository-name">{userName}</div>
      <div>
        {userName && (
          <Link to="/" id="go-back">
            Go Back
          </Link>
        )}
      </div>
      <div>
        {repositoryName && (
          <Link to={linkRepo} id="go-repository-list">
            Go repository list
          </Link>
        )}
      </div>
    </div>
  )
}
export default Header
