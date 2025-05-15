import React from 'react'
import Navbar from '../../components/common/Navbar/Navbar'
import Home from '../Dashboard/Home'

function Landing() {
  return (
    <div>

      <Navbar />
      <div className="text-center p-50">
        <Home />
      </div>

    </div>
  )
}

export default Landing