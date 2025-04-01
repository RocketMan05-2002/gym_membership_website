import React, { useState } from 'react'
import './diet.css'
import Bmi from '../../components/bmi/Bmi'

const Diet = () => {
  const[bmi,setBmi] = useState(null);
  const[type,setType] = useState('bulk');
  return (
    <div className='gym__diet' id='diet'>
      <div className='gym__diet-bmi'>
        <Bmi setBmi={setBmi}/>
      </div>
      <div className='gym__diet-content'>
        {/* RADIO Component to choose bulk/cut */}
        {/* based on these bmi and type we can hardcode a diet plan. simply create a json */}
        {/* or if you dont want it, take values and create a button to get an email for diet plans */}
      </div>
    </div>
  )
}

export default Diet
