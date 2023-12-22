import React, { useState } from 'react'

const Property = ({ children, inputName, rowEditing }) => {


  const [isEditing, setIsEditing] = useState(rowEditing)



  return (
    <div className='property'>
      {children}
      <input type="hidden" name={inputName} />
    </div>
  )
}

export default Property