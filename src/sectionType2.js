import React from 'react';

const sectionType2=(props)=>{
    const styleImg={
        width:'10%',
        maxWidth:'10%',
        minWidth:'100px',
        height:'auto',
        border: '2px solid #bdbebd',
        borderRadius: '25px',
        padding:'20px',
        margin:'10px 0 0 0'
    }
    return(
        <div style={props.style}>
            <img src={props.src} style={styleImg}/>
        </div>
    )
}

export default sectionType2
