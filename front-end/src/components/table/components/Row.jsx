import React, { useState } from 'react'

import {logFormData} from "../../../libs/formDataLogger"


const Row = ({ children, isEditing, setIsEditing }) => {


    const onSubmit = (e) => {
        e.preventDefault();
        logFormData(e.target)
    }


    return (
        <form
            onSubmit={onSubmit}
            className={`row editing-${isEditing}`}>
            {
                children?.map((item, index) => {
                    return React.cloneElement(item, {
                        key: index,
                        isEditing: isEditing,
                        setIsEditing: setIsEditing
                    })
                })
            }
        </form>
    )
}

export default Row