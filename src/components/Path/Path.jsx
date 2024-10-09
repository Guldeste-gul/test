import React from 'react';
import svg5 from '../assets/svg5.svg'
import './Path.scss'

const Path = () => {
    return (
        <div className='path'>
            <div className='container'>
                <div className='path__row'>
                    <img className='path__block-img' src={svg5} alt=""/>
                    <h2 className='path__block-title'>Акции</h2>
                </div>
            </div>
        </div>
    );
};

export default Path;