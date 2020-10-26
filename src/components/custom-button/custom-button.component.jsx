import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({children, ...othersProps}) => (
  <button className='custom-button' {...othersProps}>
    {children} 
  </button>
)


export default CustomButton