import React from 'react'

const TableBody = ({ children, isEditing, setIsEditing }) => {





  return (
    <div className='table-body'  >
      {children?.map((item, index) => {
        return React.cloneElement(item, {
          key: index,
          isEditing: isEditing,
          setIsEditing: setIsEditing
        })
      })}
    </div>
  )
}

export default TableBody