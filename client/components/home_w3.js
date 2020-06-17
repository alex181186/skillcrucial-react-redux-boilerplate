import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import InputView from './input_w3'
import RepositoryView from './repository_w3'
import TextRepositoryView from './text_w3'

const Home = () => {
  // const [projectList, setProjectList] = useState([])
  // const [currentProject] = useState('12345678')
  const [userName, setUserName] = useState('')

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            {/* add your routes here */}
            <Route exact path="/" component={() => <InputView setUserName={setUserName} />} />
            <Route
              exact
              path="/:userName"
              component={() => <RepositoryView userName={userName} />}
            />
            <Route
              exact
              path="/:userName/:repositoryName"
              component={() => <TextRepositoryView />}
            />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
