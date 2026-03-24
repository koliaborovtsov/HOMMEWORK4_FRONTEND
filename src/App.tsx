import React from 'react';
import ChatWindow from './components/chat/ChatWindow';
import './App.css';

function App() {
  return (
	<div className="App">
	  <div className="chat-container">
		<header className="chat-header">
		  <h1>Чат-помощник</h1>
		</header>
		<ChatWindow />
	  </div>
	</div>
  );
}

export default App;