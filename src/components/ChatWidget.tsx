import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaPaperPlane, FaTimes, FaRobot } from 'react-icons/fa';

const ChatButton = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

const ChatWindow = styled(motion.div)`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 350px;
  height: 500px;
  background: ${({ theme }) => theme.background};
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
`;

const ChatHeader = styled.div`
  padding: 15px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.background};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Message = styled.div<{ $isUser?: boolean }>`
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 15px;
  background: ${({ theme, $isUser }) => 
    $isUser ? theme.primary : theme.cardBackground};
  color: ${({ theme, $isUser }) => 
    $isUser ? theme.background : theme.text};
  align-self: ${({ $isUser }) => ($isUser ? 'flex-end' : 'flex-start')};
  word-wrap: break-word;
`;

const ChatInput = styled.form`
  padding: 15px;
  background: ${({ theme }) => theme.cardBackground};
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary};
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const BotTyping = styled.div`
  display: flex;
  gap: 4px;
  padding: 10px;
  align-self: flex-start;

  span {
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    animation: bounce 1s infinite;
    opacity: 0.6;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;

const SuggestedQuestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 15px;
`;

const SuggestedQuestion = styled.button`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.primary};
  }
`;

interface Message {
  text: string;
  isUser: boolean;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Shrikesh's virtual assistant. I can help you learn about his skills, projects, education, or how to contact him. What would you like to know?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getSuggestedQuestions = (lastMessage: Message): string[] => {
    if (lastMessage.isUser) return [];

    if (lastMessage.text.includes("skills")) {
      return [
        "What programming languages does he know?",
        "What frameworks does he use?",
        "Tell me about his projects"
      ];
    }

    if (lastMessage.text.includes("projects")) {
      return [
        "How were they built?",
        "What technologies were used?",
        "How can I contact him?"
      ];
    }

    if (lastMessage.text.includes("education")) {
      return [
        "What are his skills?",
        "Show me his projects",
        "How can I reach him?"
      ];
    }

    return [
      "Tell me about his skills",
      "What projects has he worked on?",
      "How can I contact him?",
      "Show me his education"
    ];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
      setIsTyping(false);
    }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    handleSubmit(new Event('submit') as any);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Programming Languages Question
    if (lowerMessage.includes('programming language') || lowerMessage.includes('language') || lowerMessage.match(/\bcode\b/)) {
      return "Shrikesh is proficient in several programming languages:\n\n" +
        "🔹 JavaScript/TypeScript (Advanced)\n" +
        "🔹 Python (Advanced)\n" +
        "🔹 Java (Intermediate)\n" +
        "🔹 PHP (Intermediate)\n" +
        "🔹 HTML5/CSS3 (Advanced)\n\n" +
        "Would you like to know about the frameworks he uses with these languages?";
    }
    
    // Frameworks Question
    if (lowerMessage.includes('framework') || lowerMessage.includes('library') || lowerMessage.includes('tool')) {
      return "Here are the main frameworks and tools Shrikesh works with:\n\n" +
        "Frontend:\n" +
        "🔹 React.js\n" +
        "🔹 Next.js\n" +
        "🔹 Styled Components\n\n" +
        "Backend:\n" +
        "🔹 Node.js/Express\n" +
        "🔹 Spring Boot\n" +
        "🔹 Django\n\n" +
        "Tools:\n" +
        "🔹 Git/GitHub\n" +
        "🔹 MongoDB\n" +
        "🔹 MySQL\n\n" +
        "Would you like to see some projects built with these technologies?";
    }

    // Greetings
    if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
      return "Hi! I'm happy to help you learn more about Shrikesh. What would you like to know?";
    }
    
    // Website development
    if (lowerMessage.includes('develop') || lowerMessage.includes('built') || lowerMessage.includes('created') || lowerMessage.includes('made')) {
      if (lowerMessage.includes('website') || lowerMessage.includes('portfolio')) {
        return "This portfolio website was developed by Shrikesh using:\n\n" +
          "🔹 React.js for the frontend\n" +
          "🔹 TypeScript for type safety\n" +
          "🔹 Styled Components for styling\n" +
          "🔹 Framer Motion for animations\n\n" +
          "It features a modern design with dark/light theme support, responsive layout, and this interactive chatbot!";
      }
    }
    
    // Project details
    if (lowerMessage.includes('project')) {
      if (lowerMessage.includes('how') || lowerMessage.includes('built') || lowerMessage.includes('tech') || lowerMessage.includes('develop')) {
        return "Here are some of Shrikesh's notable projects and their tech stacks:\n\n" +
          "1. Portfolio Website:\n" +
          "   🔹 React.js, TypeScript, Styled Components\n" +
          "   🔹 Framer Motion for animations\n\n" +
          "2. E-commerce Platform:\n" +
          "   🔹 Next.js for frontend\n" +
          "   🔹 Node.js/Express backend\n" +
          "   🔹 MongoDB database\n\n" +
          "3. Mobile App:\n" +
          "   🔹 React Native\n" +
          "   🔹 Firebase backend\n\n" +
          "Would you like more details about any specific project?";
      }
      return "Shrikesh has worked on several exciting projects:\n\n" +
        "1. Portfolio Website (React.js)\n" +
        "2. E-commerce Platform (Next.js)\n" +
        "3. Mobile App (React Native)\n" +
        "4. Task Management System (MERN Stack)\n" +
        "5. Chat Application (Socket.io)\n\n" +
        "Would you like to know how these were built?";
    }
    
    // Contact information
    if (lowerMessage.match(/\b(contact|email|phone|reach|message)\b/)) {
      return "You can contact Shrikesh through:\n\n" +
        "📧 Email: shrikeshshetty1234@gmail.com\n" +
        "📱 Phone: +91 7045332855\n" +
        "🌐 LinkedIn: linkedin.com/in/shrikesh-shetty\n" +
        "💻 GitHub: github.com/shrikesh-shetty\n\n" +
        "Or use the Contact form in the Contact section!";
    }
    
    // Skills and technologies
    if (lowerMessage.match(/\b(skill|tech|stack)\b/)) {
      return "Shrikesh's technical skills include:\n\n" +
        "Frontend:\n" +
        "🔹 React.js (Advanced)\n" +
        "🔹 HTML5/CSS3 (Advanced)\n" +
        "🔹 JavaScript/TypeScript (Advanced)\n\n" +
        "Backend:\n" +
        "🔹 Node.js/Express (Intermediate)\n" +
        "🔹 Python/Django (Intermediate)\n" +
        "🔹 Java/Spring Boot (Intermediate)\n\n" +
        "Would you like to know more about his projects or education?";
    }
    
    // Education
    if (lowerMessage.match(/\b(study|education|degree|college|university|school)\b/)) {
      return "Shrikesh's educational background:\n\n" +
        "🎓 B.Sc in Computer Science\n" +
        "📚 Relevant Coursework:\n" +
        "   • Data Structures & Algorithms\n" +
        "   • Web Development\n" +
        "   • Database Management\n" +
        "   • Software Engineering\n\n" +
        "He's passionate about continuous learning and stays updated with the latest technologies!";
    }
    
    // Resume
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return "You can view and download Shrikesh's resume by clicking the Resume button in the navigation bar. The resume includes:\n\n" +
        "📄 Detailed work experience\n" +
        "🔧 Technical skills\n" +
        "🎓 Educational background\n" +
        "🏆 Certifications and achievements";
    }

    // About
    if (lowerMessage.includes('who') || lowerMessage.includes('about')) {
      return "Shrikesh is a passionate Computer Science student and full-stack developer with expertise in:\n\n" +
        "💻 Web Development\n" +
        "📱 Mobile App Development\n" +
        "🔧 Software Engineering\n" +
        "🎨 UI/UX Design\n\n" +
        "Want to know more about his skills, projects, or experience?";
    }

    // Default response with conversation continuation
    return "I can tell you about:\n\n" +
      "💻 Shrikesh's programming skills\n" +
      "🚀 His projects and experience\n" +
      "🎓 Educational background\n" +
      "📧 Contact information\n\n" +
      "What would you like to know more about?";
  };

  return (
    <>
      <ChatButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaComments />
      </ChatButton>
      
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ChatHeader>
              <h3>
                <FaRobot style={{ marginRight: '8px' }} />
                Chat with me
              </h3>
              <CloseButton onClick={() => setIsOpen(false)}>
                <FaTimes />
              </CloseButton>
            </ChatHeader>
            
            <ChatMessages>
              {messages.map((message, index) => (
                <Message key={index} $isUser={message.isUser}>
                  {message.text}
                </Message>
              ))}
              {isTyping && (
                <BotTyping>
                  <span></span>
                  <span></span>
                  <span></span>
                </BotTyping>
              )}
              {!isTyping && messages.length > 0 && !messages[messages.length - 1].isUser && (
                <SuggestedQuestions>
                  {getSuggestedQuestions(messages[messages.length - 1]).map((question, index) => (
                    <SuggestedQuestion
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                    >
                      {question}
                    </SuggestedQuestion>
                  ))}
                </SuggestedQuestions>
              )}
              <div ref={messagesEndRef} />
            </ChatMessages>
            
            <ChatInput onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <SendButton type="submit">
                <FaPaperPlane />
              </SendButton>
            </ChatInput>
          </ChatWindow>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;