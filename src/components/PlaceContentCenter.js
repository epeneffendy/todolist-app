import React from 'react';

function PlaceContentCenter({children}) {
    return (
            <div className='py-4 '>
                <div className="container h-100">
                    <div className="row justify-content-center">
                        {children}
                    </div>
                </div>
            </div>
    );
}

export default PlaceContentCenter;