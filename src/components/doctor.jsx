import React from 'react';
import "./assignment2.css";
import DoctorCard from './doctorCard';

export default function Doctor() {
    const docInfo=[
        {photo:'images/pexels-andrew-personal-training-697509.jpg',dName:'Patey Cruiser',job:'Neurosurgeon',star:4},
        {photo:'images/pexels-chloe-1043471.jpg',dName:'Mario Speedway',job:'Cardiologist',star:5},
        {photo:'images/pexels-daniel-xavier-1239288.jpg',dName:'Anna Sthesia',job:'Surgeon',star:3},
        {photo:'images/pexels-george-dolgikh-1310522.jpg',dName:'Paul Moliv',job:'Dentist',star:2},
        {photo:'images/pexels-italo-melo-2379005.jpg',dName:'Anna Maul',job:'Eye Specialst',star:4},
        {photo:'images/pexels-pixabay-220453.jpg',dName:'Patrick Steward',job:'Urology',star:5},
        {photo:'images/pexels-pixabay-415829.jpg',dName:'Patricia Jobs',job:'Pulomonology',star:2},
        {photo:'images/pexels-stefan-stefancik-91227.jpg',dName:'Ruth Jones',job:'Physiotherapist',star:3},
    ]
  return (
    <div className='wrapper'>
        {docInfo.map(i=>{
            return(
                <div className='card'>
                    <img src={i.photo} alt="" />
                    <h3>{i.dName}</h3>
                    <p>{i.job}</p>
                    <span>
                    {[...Array(i.star).keys()].map(num=>(
                        <i class="fa-sharp fa-solid fa-star"></i>
                    ))}
                    </span><br></br>

                    <button>Book Appointment</button>
                </div>
            )
        })}
    </div>
  )
}
