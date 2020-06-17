import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from './header_w3'
// import Head from './head'

const DashboardProfile = (props) => {
  const { userName } = props
  const [repositoryList, setRepositoryList] = useState([])
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      setRepositoryList(it.data.map((repo) => repo.name))
    })
    return () => {}
  }, [userName])
  return (
    <div>
      <Header />
      <div>
        {repositoryList.map((repoName) => {
          const linkRepo = `${userName}/${repoName}`
          return (
            <div>
              <Link to={linkRepo}>{repoName}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(DashboardProfile)
