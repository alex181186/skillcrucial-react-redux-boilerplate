import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import Header from './header_w3'
// import Head from './head'

const DashboardProfile = () => {
  const { userName } = useParams()
  const [user, setUser] = useState({ userName })
  useEffect(() => {
    Axios.get(`/users/${user}/repos`).then((it) => {
      setUser(it.data)
    })
    return () => {}
  }, [user])

  return (
    <div>
      <div id="title">Main</div>
      <Header />
      <div id="username">{user}</div>
    </div>
  )
}

export default React.memo(DashboardProfile)
