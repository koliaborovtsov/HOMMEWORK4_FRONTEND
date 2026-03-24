import React from 'react';

interface TypingIndicatorProps {
  isVisible: boolean;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
	<div className="message message-assistant typing-indicator">
	  <div className="message-header">
		<span className="message-role">Ассистент</span>
	  </div>
	  <div className="typing-dots">
		<span>.</span>
		<span>.</span>
		<span>.</span>
	  </div>
	</div>
  );
};

export default TypingIndicator;