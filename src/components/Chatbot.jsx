import { useState, useEffect, useRef } from "react";
import "react-chat-widget/lib/styles.css";
import "../chatbot.css";
import { FaCommentAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const questions = [
  {
    question: "How many days maximum claim for regular drop offs? For rush?",
    answer:
      "Usually 2-3 days maximum.\n\nFor rush, 4 hours or maximum of 1 day.",
  },
  {
    question: "Do you cater pick up and delivery?",
    answer:
      "We don't have it for now. But working on to the plan to be able to efficiently meet customer need of convenience and hassle-free transactions.",
  },
  {
    question: "What's good about doing it yourself or dropping off laundry?",
    answer:
      "For self-service, you can have your laundry done in less than two hours. Lessen the doubt of having it mixed up with other laundries. You can have the choice of detergent and fabric conditioner to use.\n\nFor drop-off, just leave all the work to be done and just come back 2-3 days to pick it up.",
  },
  {
    question: "For dry cleaning, how many days maximum to have it claimed?",
    answer:
      "Usually 5 days. But, sometimes it varies depending on how complicated the design of your garments.",
  },
  {
    question: "What should be the kind of detergent to use?",
    answer: "The HE (high efficiency) liquid detergent.",
  },
];

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messageHistory, setMessageHistory] = useState([
    {
      text: "Welcome to Wash Up Bot! Click on any question above.",
      from: "bot",
      timestamp: new Date(),
    },
  ]);
  const [askingQuestions, setAskingQuestions] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const chatHistoryRef = useRef(null);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messageHistory]);

  const toggleDialogueBox = () => {
    setIsVisible((prevState) => !prevState);

    if (!isVisible) {
      setSelectedQuestion(null);
      setAskingQuestions(true);
    }
  };

  const handleQuestionClick = (question, answer) => {
    setSelectedQuestion(question);
    const timestamp = new Date();
    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { text: question, from: "user", timestamp },
      { text: "Typing...", from: "bot", timestamp: new Date() },
    ]);
    setIsTyping(true);
    setTimeout(() => {
      setMessageHistory((prevHistory) => [
        ...prevHistory.filter((msg) => msg.text !== "Typing..."),
        { text: answer, from: "bot", timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 3000);

    setAskingQuestions(false);
  };

  const handleYesClick = () => {
    setAskingQuestions(true);
    setSelectedQuestion(null); 
  };

  const handleNoClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="chatbot-container">
      {isVisible && (
        <div className="chat-container">
          <div className="questions-container">
            {askingQuestions &&
              questions.map((q, index) => (
                <div
                  key={index}
                  className={`question ${
                    selectedQuestion === q.question ? "selected" : ""
                  }`} 
                  onClick={() => handleQuestionClick(q.question, q.answer)}
                >
                  {q.question}
                  {selectedQuestion === q.question && isTyping && (
                    <TypingIndicator />
                  )}
                </div>
              ))}
          </div>
          <div
            className="chat-messages"
            ref={chatHistoryRef}
            style={{ overflowY: "scroll", height: "300px" }}
          >
            {" "}
            <h1 className="mb-4 w-full border-b border-red pb-4 font-semibold text-lg">
              Chat History
            </h1>
            {messageHistory.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.from === "user" ? "user-message" : "bot-message"
                }`}
              >
                <div className="message-content">
                  <span className="message-text">{message.text}</span>
                </div>
                <h1 className="message-timestamp">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </h1>
              </div>
            ))}
          </div>
          {!askingQuestions && (
            <div className="answer-options">
              <p>Do you have any other questions?</p>
              <button className="yes-button" onClick={handleYesClick}>
                Yes
              </button>
              <button className="no-button" onClick={handleNoClick}>
                No
              </button>
            </div>
          )}
        </div>
      )}

      <button
        className={`toggle-button ${isVisible ? "visible" : ""}`}
        onClick={toggleDialogueBox}
      >
        {isVisible ? <IoCloseSharp size={20} /> : <FaCommentAlt size={20} />}{" "}
      </button>
    </div>
  );
};

const TypingIndicator = () => {
  return <div className="typing-indicator">Typing...</div>;
};

export default Chatbot;
