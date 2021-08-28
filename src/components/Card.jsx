import React from 'react'
// import imagen from '../assets/miFoto.jpg'
import '../styles/styles.css'

const Card = ({photo, name, index}) => {


    return (
        <div className="card">
            <img className="card" src={photo} alt="Imagen 1" />
            <div className="card-body">
                <h4 className="card-title">
                        {name}
                </h4>
                <h4 className="card-title">
                        {index}
                </h4>
            </div>
            
        </div>
    )
}


export default Card;