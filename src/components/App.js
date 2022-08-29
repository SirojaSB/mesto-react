import '../index.css'
import {useState} from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImageOpen, setIsImageOpen] = useState(false);

  const closeAllPopups = () => {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setIsImageOpen(false);
  }

  const handleEditAvatarClick = () => {
      setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
      setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
      setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
      setSelectedCard(card);
      setIsImageOpen(true);
  }

  return (
    <>
      <div className="page">
        <Header/>
        <Main
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}/>
        <Footer/>
        <PopupWithForm
          name={'add'}
          ariaLabel={'добавлением'}
          title={'Новое место'}
          button={'Создать'}
          isOpen={isAddPlacePopupOpen}
          isClose={closeAllPopups}>
            <label className="popup__label">
              <input id="form-img-name" type="text" name="name" className="popup__input popup__input_type_name"
                     placeholder="Название" required minLength="2" maxLength="30"/>
                <span className="popup__input-error form-img-name-error"/>
            </label>
            <label className="popup__label">
              <input id="form-img-link" type="url" name="link" className="popup__input popup__input_type_job"
                     placeholder="Ссылка на изображение" required/>
                <span className="popup__input-error form-img-link-error"/>
            </label>
        </PopupWithForm>
        <PopupWithForm
            name={'edit'}
            ariaLabel={'редактированием'}
            title={'Редактировать профиль'}
            button={'Сохранить'}
            isOpen={isEditProfilePopupOpen}
            isClose={closeAllPopups}>
            <label className="popup__label">
              <input id="formname" type="text" name="name" className="popup__input popup__input_type_name"
                     placeholder="ФИО" required minLength="2" maxLength="40"/>
                <span className="popup__input-error formname-error"/>
            </label>
            <label className="popup__label">
              <input id="formjob" type="text" name="about" className="popup__input popup__input_type_job"
                     placeholder="Информация о деятельности" required minLength="2" maxLength="200"/>
                <span className="popup__input-error formjob-error"/>
            </label>
        </PopupWithForm>
        <PopupWithForm
            name={'avatar'}
            ariaLabel={'редактированием аватара'}
            title={'Обновить аватар'}
            button={'Сохранить'}
            isOpen={isEditAvatarPopupOpen}
            isClose={closeAllPopups}>
            <label className="popup__label">
              <input id="form-avatar-link" type="url" name="avatar" className="popup__input popup__input_type_job"
                     placeholder="Ссылка на изображение" required/>
                <span className="popup__input-error form-avatar-link-error"/>
            </label>
        </PopupWithForm>
        <PopupWithForm
            name={'agree'}
            ariaLabel={'подтверждением'}
            title={'Вы уверены?'}
            button={'Да'}/>
        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            isOpen={isImageOpen}/>
      </div>
    </>
  );
}

export default App;
