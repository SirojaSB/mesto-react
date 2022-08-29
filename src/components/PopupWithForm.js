import React from 'react';

function PopupWithForm(props){
    return (
        <div id={`popup-${props.name}`} className={`popup ${props.isOpen ? 'popup_open' : ''}`}>
            <div className="popup__content">
                <button id={`close-${props.name}`} type="button" className="popup__close"
                        aria-label={`Закрыть форму с ${props.ariaLabel}`} onClick={props.isClose}></button>
                <h3 className="popup__title">{props.title}</h3>
                <form id={`form-${props.name}`} name={`form-${props.name}`} className={`popup__form popup__form_${props.name}`} noValidate>
                    {props.children}
                    <button type="submit" className={`popup__submit popup__submit_${props.name}`}>{props.button}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm