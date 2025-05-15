import React from 'react'
import Navbar from '../../components/common/Navbar/Navbar'

function Landing() {
  return (
    <div>

      <Navbar />
      <div className="text-center p-50">
        <h1 className="text-5xl font-bold ">Welcome to Our App</h1>
        <p className="text-2xl font-bold text-gray-600">Your dashboard starts here.</p>
      </div>

    </div>
  )
}

export default Landing