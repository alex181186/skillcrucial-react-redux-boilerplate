import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header_w3'

// const ReactMarkdown = require('react-markdown')

const DashboardProfile = () => {
  const [readme, setReadme] = useState('')
  const { userName, repositoryName } = useParams()

  // ovasylenko
  // http://elzerg-w12-t1.herokuapp.com/ovasylenko/week-2-react-routes
  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${userName}/${repositoryName}/readme`)
      .then(({ data }) => {
        axios(data.download_url).then(({ data: text }) => setReadme(text))
      })
    return () => {}
  }, [userName, repositoryName])

  return (
    <div>
      <Header />
      <div id="description">{readme}</div>
    </div>
  )
}

export default React.memo(DashboardProfile)
