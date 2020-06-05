import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Index from './index_w3'
import Repository from './repository_w3'
import TextRepository from './text_w3'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            {/* add your routes here */}
            <Route exact path="/" component={() => <Index />} />
            <Route exact path="/:userName" component={() => <Repository />} />
            <Route exact path="/:userName/:repositoryName" component={() => <TextRepository />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
