import React from 'react'

const Button = ( {children, disabled} ) => {
  return (
    <button type='submit' disabled={disabled} className='btn'> 
        {children}
    </button>
  )
}

export default Button