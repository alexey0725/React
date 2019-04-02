import React from 'react';
import "./PhoneListItem.css"

const PhoneListItem = ({card,addToCart}) => {

    return (  
    <div className="card">
      <img src={card.img} alt="" className="card__img " />
      <p className="card__rewiew">{card.reviews} </p>
      <p className="cardtitle">{card.title}</p>
      <div className="buy">
          <p className="price">{card.price}</p>
          <img src="https://icon2.kisspng.com/20180704/czv/kisspng-shopping-cart-computer-icons-clip-art-place-order-5b3d5c67826703.8721611415307480075341.jpg"
           alt="cart" data-name = {card.title} onClick = {addToCart}/>
      </div>
  </div>
        
    );
};

export default PhoneListItem;