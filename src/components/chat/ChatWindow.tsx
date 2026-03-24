import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../../types/message';
import MessageList from './MessageList';
import InputArea from './InputArea';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
	{
	  id: '1',
	  role: 'assistant',
	  content: 'Привет! Чем я могу вам помочь?',
	  timestamp: new Date(),
	},
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Автоскролл к последнему сообщению
  useEffect(() => {
	messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (content: string) => {
	if (!content.trim() || isLoading) return;

	// Cообщение пользователя
	const userMessage: Message = {
	  id: Date.now().toString(),
	  role: 'user',
	  content: content.trim(),
	  timestamp: new Date(),
	};
	setMessages((prev) => [...prev, userMessage]);
	setIsLoading(true);

	// Симулируем ответ ассистента
	setTimeout(() => {
	  const assistantMessage: Message = {
		id: (Date.now() + 1).toString(),
		role: 'assistant',
		content: getMockResponse(content),
		timestamp: new Date(),
	  };
	  setMessages((prev) => [...prev, assistantMessage]);
	  setIsLoading(false);
	}, Math.random() * 1000 + 1000);
  };

  // Моковые ответы ассистента
  const getMockResponse = (userMessage: string): string => {
	const responses = [
	  'Спасибо за ваше сообщение! Я обработал ваш запрос.',
	  'Интересный вопрос! Давайте разберемся вместе.',
	  'Я понимаю ваш вопрос. Вот что я могу предложить...',
	  'Спасибо, что поделились. Это очень важная тема.',
	  'Я ценю ваше сообщение. Дайте мне подумать...',
	  'Отличный вопрос! Вот что я об этом думаю.',
	];
	return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
	<div className="chat-window">
	  <MessageList messages={messages} isLoading={isLoading} />
	  <div ref={messagesEndRef} />
	  <InputArea onSendMessage={handleSendMessage} isLoading={isLoading} />
	</div>
  );
};

export default ChatWindow;