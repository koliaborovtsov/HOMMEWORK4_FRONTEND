import React from 'react';
import { Message } from '../../types/message';
import TypingIndicator from './TypingIndicator';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
  return (
	<div className="message-list">
	  {messages.map((message) => (
		<div
		  key={message.id}
		  className={`message ${message.role === 'user' ? 'message-user' : 'message-assistant'}`}
		>
		  <div className="message-header">
			<span className="message-role">
			  {message.role === 'user' ? 'Вы' : 'Ассистент'}
			</span>
			<span className="message-time">
			  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
			</span>
		  </div>
		  <div className="message-content">{message.content}</div>
		</div>
	  ))}
	  {isLoading && <TypingIndicator isVisible={true} />}
	</div>
  );
};

export default MessageList;