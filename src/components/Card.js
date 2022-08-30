import React from 'react';

function Card({card, onCardClick}){
    return (
        <li key={card._id} id={card._id} className="snapshots__element">
            <button type="button" className="snapshots__delete" aria-label="Удалить карточку"></button>
            <img src={card.link} alt={card.name}
                 className="snapshots__photo" onClick={function handleClick() {
                onCardClick(card);
            }}/>
            <div className="snapshots__info">
                <h2 className="snapshots__title">{card.name}</h2>
                <div className="like-container">
                    <button type="button" className="snapshots__like"/>
                    <h3 className="snapshots__num-like">{card.likes.length}</h3>
                </div>
            </div>
        </li>
    )
}

export default Card