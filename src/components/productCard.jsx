import React from 'react';
import "./assignment5.css";

export default function ProductCard(props) {
    console.log(props.data.length);
    return(
        <div className='wrap'>
            {props.data.map(i=>{
                return(
                    <div className="prodCard" style={{backgroundColor:(i.key %2==0)?'pink' : 'lightgreen'}}>
                        <h3>{i.prod_name}</h3>
                        <strong>{i.price}</strong>
                        <p>{i.category}</p>
                    </div>
            )
        })}
        </div>

    )
}
