import React from 'react';

function Card(props){
    return (
        <li key={props.id} className="snapshots__element">
            <button type="button" className="snapshots__delete" aria-label="Удалить карточку"></button>
            <img src={props.link} alt={props.title}
                 className="snapshots__photo" onClick={function handleClick() {
                props.onCardClick(props.card);
            }}/>
            <div className="snapshots__info">
                <h2 className="snapshots__title">{props.title}</h2>
                <div className="like-container">
                    <button type="button" className="snapshots__like"/>
                    <h3 className="snapshots__num-like">{props.numLikes}</h3>
                </div>
            </div>
        </li>
    )
}

export default Card