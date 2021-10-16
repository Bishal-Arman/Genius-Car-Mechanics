import React from 'react';
import'./Service.css'

const Service = (props) => {
    const{name,price,img,discription}=props.service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>Expertize:{name}</h2>
            <h5 className='text-info'>Cost:${price}</h5>
            <p className='px-5 text-white'>{discription}</p>
        </div>
    );
};

export default Service;