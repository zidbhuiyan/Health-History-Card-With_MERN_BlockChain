import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function CardItem(props) {
  return (
    <>

    <li className='cards__item'>
      <div className='cards__item__link'>
      <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
            <div className='cards__item__info'>
            
          </div>
          
          <div className='card-btns'>
        <Link className='cards__item__link' to={props.path}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          {props.text}
        </Button>
        </Link>
      </div>
      </div>
    </li>

    </>
  );
}

export default CardItem;
