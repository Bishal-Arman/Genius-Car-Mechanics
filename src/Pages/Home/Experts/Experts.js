import React from 'react';
import mechanic1 from '../../../images/mechanic/buoyant-successful-handyman-posing-against-white-wall.jpg'
import mechanic2 from'../../../images/mechanic/repair-man-making-car-service.jpg'
import mechanic3 from '../../../images/mechanic/smiling-mechanic-with-arms-crossed-spanner.jpg'
import Expert from '../Expert/Expert';

const experts=[
    {
       img:mechanic1,
       name:'Andrew Smith',
       expertize:'-Engine Expert-'
    },
    {
        img:mechanic2,
        name:'Jhon Rony',
        expertize:'-Polish Expert-'
     },
     {
        img:mechanic3,
        name:'Kurt Angel',
        expertize:'-Repair Expert-'
     }
]

const Experts = () => {
    return (
        <div className='container mt-5 '>
            <h2 className='text-primary mb-3'> Our Experts</h2>
            <div className='row'>
                  {
                      experts.map(expert=><Expert
                      key={expert.name}
                      expert={expert}
                      ></Expert>)
                  }
            </div>
        </div>
    );
};

export default Experts;