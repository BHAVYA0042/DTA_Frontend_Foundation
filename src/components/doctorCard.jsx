import React from 'react'

export default function DoctorCard(props) {
  return (
    <div className='card'>
    <img src={props.val.photo} alt="" />
    <h3>{props.val.dName}</h3>
    <p>{props.val.job}</p>
    <span>
    {[...Array(props.val.star).keys()].map(num=>(
        <i class="fa-sharp fa-solid fa-star"></i>
    ))}
    </span><br></br>

    <button>Book Appointment</button>
</div>
  )
}
