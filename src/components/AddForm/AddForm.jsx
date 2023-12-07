import { useRef, useState } from 'react';

import AddButton from '../../img/button/add.svg';

export const AddForm = ({ onSubmitFunc, title, placeholder, inputName }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    onSubmitFunc(inputValue);
    setInputValue('');
    inputRef.current.focus();
  };

  return (
    <div className={inputName}>
      <h1 className="title">{title}</h1>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="form__input"
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="form__button">
          <img src={AddButton} alt="Add" />
        </button>
      </form>
    </div>
  );
};
