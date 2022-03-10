import React from 'react'

export default function ImageCard(props){

    return(
        <div className='image-card-container' onClick={()=>props.onClick(props.src)} >
            <img src={props.src} alt='digimon'/>
        </div>
    );
}