import React from 'react';

function ImagePopup(props){
    return (
        <div id="popup-img" className={`popup popup_img ${props.isOpen ? 'popup_open' : ''}`}>
            <div className="popup__figure">
                <button id="close-img" type="button" className="popup__close" aria-label="Закрыть карточку" onClick={props.onClose}></button>
                <img src={props.card.link} alt={props.card.name}
                     className="popup__image"/>
                <p className="popup__caption">{props.card.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup