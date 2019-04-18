import React from 'react';
const header=()=>{
    const style={
        position:'absolute',
        top:'0%',
        left:'0%',
        zIndex:'2',
        height:'100px',
        backgroundColor:'#090909',
        width:'100%',
        color: '#e9e9e9',
        borderBottom:'2px solid #bdbebd',
    }
    return(
        <div style={style}>
            <h1>Stopnie Wojskowe Quiz</h1>
        </div>
    )
};
export default header;
