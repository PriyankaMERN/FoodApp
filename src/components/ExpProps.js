import React from 'react';

function ExpProps(Props){

    return (
        <div>
    <h1>Hey new {Props.name}</h1>
    {Props.children}
    </div>)
}

export default ExpProps;