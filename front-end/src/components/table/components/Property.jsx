import React, { useState } from 'react'

const Property = ({ children, inputName, isReadOnly = false, isSelectBox = false }) => {



  



  return (
    <div className={`property is-read-only-${isReadOnly}`}>



      {children}

      {
        isReadOnly === false && isSelectBox === false && <input
          type="hidden"
          name={inputName} />
      }

    </div>
  )
}

export default Property