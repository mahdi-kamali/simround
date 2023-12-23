import React, { useState } from 'react'

import { logFormData } from "../../../libs/formDataLogger"


const Row = ({ children, onUpdateSubmit }) => {





    return (
        <form
            onSubmit={onUpdateSubmit}
            className={`row`}>
            {
                children
            }
        </form>
    )
}

export default Row