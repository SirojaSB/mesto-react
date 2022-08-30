import {useEffect, useState} from 'react';
import {api} from "../utils/Api.js";
import Card from "./Card.js";



function Main({onAddPlace, onEditProfile, onEditAvatar, onCardClick}){
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    async function getFullUserInfo(){
        try{
            const info = await api.getUserInfo();
            setUserName(info.name);
            setUserDescription(info.about);
            setUserAvatar(info.avatar);
        }
        catch (err) {
            console.log(err)
        }
    }

    async function getCardsInfo(){
        try{
            const res = await api.getCards();
            setCards(res);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getFullUserInfo();
        getCardsInfo()
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-container">
                        <img src={userAvatar} alt="Фотография исследователя" className="profile__avatar" onClick={onEditAvatar}/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" aria-label="Редактировать" onClick={onEditProfile}></button>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" aria-label="Добавить фотографию" onClick={onAddPlace}></button>
            </section>
            <section className="snapshots">
                <ul className="snapshots__elements">
                    {cards.map((card)=>(
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={onCardClick}/>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main