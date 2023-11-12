import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; 

// FAQQuestion component represents a single FAQ item
function FAQQuestion(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
        // Conditional styling based on whether the FAQ is open
    <div className={`faq-question ${isOpen ? 'faqQuestionOpen' : ''}`}>
      <div className="questionHeader" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="faqQuestionH3">{props.question}</h3>
      </div>
      <p className={`answer ${isOpen ? 'faqQuestionOpenAnswer' : ''}`}>{props.answer}</p>
    </div>
  );
}

  // Handles input changes and triggers the search function
function HelpPage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
    searchFAQs(event.target.value);
  }

    // Simulates searching FAQs based on a query
  function searchFAQs(query) {
    // Sample q n answers
    const webResults = [
      {
        title: "How do I change my profile pic?",
        snippet: "You can change your profile pic by clicking on your avatar in the top right corner and selecting 'Edit Profile'. Then, you can upload a new picture or choose from our gallery.",
      },
      {
        title: "Where is my cheese?",
        snippet: "Your cheese is in the fridge unless someone ate it. If you can't find it, please contact our support team, and we will send you more cheese.",
      },
      {
        title: "How can we assist you today?",
        snippet: "We are here to help you with any questions or issues you may have. You can browse our FAQs, contact our support team, or visit our other pages for more information.",
      },
    ];

    setResults(webResults);
  }

  return (
    <div className="help-container"> {/* Use the CSS class name */}
      <header className="header">
        <h1>Help Page</h1>
        <button className="menuButton">Menu</button>
      </header>
      <section className="faqSection">
        <h2>Frequently Asked Questions</h2>
        <p>How can we assist you today?</p>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search FAQs"
        />
        {results.length > 0 && (
          <div className="searchResults">
            {results.map((result, index) => (
              <FAQQuestion
                key={index}
                question={result.title}
                answer={result.snippet}
              />
            ))}
          </div>
        )}
      </section>
      <div className="dropdown-list">

    </div>
      <section className="otherSection">
        <h2>Other Pages</h2>
        <a className="otherSectionA" href="/contact">Contact Support</a>
        <a className="otherSectionA" href="/links">Links Here</a>
      </section>
    </div>
  );
}

ReactDOM.render(<HelpPage />, document.getElementById('root'));

export default HelpPage;
