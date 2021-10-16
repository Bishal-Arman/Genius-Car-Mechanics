import React from 'react';
import'./Expert.css'

const Expert = ({expert}) => {
    const{name,img,expertize}=expert;
    return (
        <div className='expert col-lg-4 col-sm-6 col-12'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='text-danger'>{expertize}</p>

        </div>
    );
};

export default Expert;