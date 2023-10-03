import React from 'react';

function Input({type = 'text', ...props}) {
    return (
        <div className='text-center'>
            <input {...props} type={type} className='form-control'/>
        </div>
    );
}

export default Input;