import React from 'react';

const sectionType1=(props)=>{
    return(
        <div onClick={props.click} style={props.style}>
            {props.id}
            {props.title}
        </div>
    )
}

export default sectionType1
