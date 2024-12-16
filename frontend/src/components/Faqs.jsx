import { useState } from "react"

const Faqs = () => {
    const [openIndex,SetOpenIndex]=useState(null);
    const faqData = [
        {
          question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces.",
        },
        {
          question: "What is a component?",
          answer: "A component is a reusable piece of UI in React.",
        },
        {
          question: "What is state in React?",
          answer: "State is a way to store and manage data in a React component.",
        },
      ];
        const toggleFaq = (index) => {
    SetOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };
    
  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            <h3>{item.question}</h3>
            <button className="faq-toggle">
              {openIndex === index ? "off" : "on"}
            </button>
          </div>
          {openIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default Faqs