import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  const { planetId } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component {planetId}
          <Link to="/dashboard">Go To Dashboard</Link>
          <div>
            <a href="/dashboard">Go To Dashboard Link</a>
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
