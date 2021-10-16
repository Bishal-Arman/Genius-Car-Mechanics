import React from 'react';
import Service from '../Service/Service';
import'./Servicess.css'

const servicess=[
    {id:1,name:"Replace Tire",price:2000,time:2,img:"https://i.ibb.co/LQz4PP2/azhar-munir-din-NWPGfi4-RAEY-unsplash-1.jpg",discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos tempore quaerat maiores laboriosam'},
    {id:2,name:"Bearing change",price:3000,time:3,img:"https://i.ibb.co/CPH7LMh/benjamin-brunner-kvd-YDxvn-Co-unsplash.jpg",discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos tempore quaerat maiores laboriosam'},
    {id:3,name:"Break reparing",price:4000,time:4,img:"https://i.ibb.co/J5VdB0s/benjamin-brunner-Yh5-WW3-Yla-ZI-unsplash.jpg",discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos tempore quaerat maiores laboriosam'},
    {id:4,name:"Mechanism changing",price:5000,time:5,img:"https://i.ibb.co/9tg6vdj/glenn-hansen-P22-M-Ke-Cs6-Y-unsplash.jpg",discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos tempore quaerat maiores laboriosam'},
    {id:5,name:"Repear car",price:6000,time:6,img:"https://i.ibb.co/DMWx5w9/kato-blackmore-qc-F-19-Bv-Vi-E-unsplash.jpg",discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos tempore quaerat maiores laboriosam'},
    {id:6,name:"Changing Tire",price:7000,time:7,img:"https://i.ibb.co/sjP3pvV/tekton-O-ufc-LVTAYw-unsplash.jpg",discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos tempore quaerat maiores laboriosam'}
]

const Servicess = () => {
    return (
       <div>
           <h2 className='text-primary mt-5'>Our Services</h2>
            <div className='service-container'>
            {
                servicess.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
       </div>
    );
};

export default Servicess;