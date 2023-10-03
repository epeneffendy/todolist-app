import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';


function Buttons(props) {
    return (
        <div>
            <button {...props} className='btn btn-primary'>{props.text}</button>
        </div>
    );
}

export default Buttons;