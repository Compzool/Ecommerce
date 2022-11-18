import React from 'react'
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri'
function Footer() {
  return (
    <div className='footer-container'>
      <p>2022 Lighter Bros All Rights Reserved </p>
      <p className='icons'>
        <RiInstagramFill/>
        <RiWhatsappFill/>
      </p>
    </div>
  )
}

export default Footer