import React, { useState } from 'react';

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
	e.preventDefault();
	if (inputValue.trim() && !isLoading) {
	  onSendMessage(inputValue);
	  setInputValue('');
	}
  };

  const isSendDisabled = !inputValue.trim() || isLoading;

  return (
	<form className="input-area" onSubmit={handleSubmit}>
	  <input
		type="text"
		value={inputValue}
		onChange={(e) => setInputValue(e.target.value)}
		placeholder={isLoading ? 'Ассистент печатает...' : 'Введите сообщение...'}
		disabled={isLoading}
		className="message-input"
	  />
	  <button
		type="submit"
		disabled={isSendDisabled}
		className="send-button"
	  >
		{isLoading ? '⏳' : '📤'}
	  </button>
	</form>
  );
};

export default InputArea;