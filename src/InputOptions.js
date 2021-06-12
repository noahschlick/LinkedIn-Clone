import React from 'react';
import "./InputOptions.css";

function inputOptions({Icon, title, color}) {
    return (
        <div className="inputOption">
            <Icon style={{color: color}}/>
            <h4>{title}</h4>
        </div>
    );
}

export default inputOptions