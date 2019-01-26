import React from 'react';

const Div = (props) => {
    return (
        <div className="about-text">
                <h1>{props.name}</h1>
                <p>{props.content}</p>
                <div className="about-button hidden button" >
                    {props.label}
                </div>
        </div>           
    );
};

export default Div;