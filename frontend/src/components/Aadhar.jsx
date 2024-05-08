import React from 'react'
import './aadhaar.css'
import Card from 'antd/es/card/Card';
import img from '../assets/aadhaar-card.png'

function Aadhar({data}) {
  return (
    <>
      <div className='aadhaarDiv'>
        <img src={img} alt='img' className='image'/>
        <Card
            className='card'
        >
        <div className='info'>
            <p>Name: {data.Name}</p>
            <p>Address: {data.Address}</p>
            <p>Phone Number: {data.phone}</p>
            <p>Date of Birth: {data.DOB}</p>
            <p style={{color:'red'}}>UID: {data.UID}</p>
        </div>
        </Card>
      </div>
    </>
  );
}

export default Aadhar
