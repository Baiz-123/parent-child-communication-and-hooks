import React from 'react';
import FullDetails from './FullDetails';

function Skills(props){
    return(<div>
        <h1 style={{color: "red"}}>My skill: {props.empskill}</h1>
        <FullDetails location="Bangalore"></FullDetails>
    </div>)
}


export default Skills;