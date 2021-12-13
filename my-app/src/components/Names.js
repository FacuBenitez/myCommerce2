import React from 'react'

const Names = (props) => {
    return (
        <div>
            <h3>
                {props.name}
            </h3>

            <h4>
                {props.email}
            </h4>

        </div>
    )
}

export default Names
