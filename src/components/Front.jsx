import React from 'react';
import './credit-card.css';
import logoSrc from '../assets/mastercard.png';
import chipSrc from '../assets/chip.png';

export default function Front() {
    return (
        <div className='container front-container'>
            <div className='header'>
                <img src={chipSrc} alt='chip' className='chip'/>
                <span className="logo">
                    <img src={logoSrc} alt='master-card-logo'/>
                    <h5>Master Card</h5>
                </span>
            </div>
            <div className="insert-side"></div>
            <div className="card-details">
                <div className="name-number">
                    <h6>Card Number</h6>
                    <h5 className='card-number'>1234 5678 9101 1121</h5>
                    <h5 className="card-name">Bharath Kumar Murugan</h5>
                </div>
                <div className="validity">
                    <h6>Valid Thru</h6>
                    <h5>05/25</h5>
                </div>
            </div>
        </div>
    )
}