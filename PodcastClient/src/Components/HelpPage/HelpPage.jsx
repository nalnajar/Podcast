import React, { useState } from "react";
import { HeaderBar } from "../Common/Common";
import "./styles.css";

// FAQQuestion component represents a single FAQ item
function FAQQuestion(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-question ${isOpen ? "faqQuestionOpen" : ""}`}>
      <div className="questionHeader" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="faqQuestionH3">{props.question}</h3>
      </div>
      <p className={`answer ${isOpen ? "faqQuestionOpenAnswer" : ""}`}>
        {props.answer}
      </p>
    </div>
  );
}

// Handles input changes and triggers the search function
function HelpPage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(event) {
    const inputValue = event.target.value;
    setInput(inputValue);
    searchFAQs(inputValue);
  }

  // Simulates searching FAQs based on a query
  function searchFAQs(query) {
    // Sample q n answers
    const webResults = [
      {
        title: "How do I change my profile pic?",
        snippet:
          "You can change your profile pic by clicking on your avatar in the top right corner and selecting 'Edit Profile'. Then, you can upload a new picture or choose from our gallery.",
      },
      {
        title: "Where is my cheese?",
        snippet:
          "Your cheese is in the fridge unless someone ate it. If you can't find it, please contact our support team, and we will send you more cheese.",
      },
      {
        title: "How can we assist you today?",
        snippet:
          "We are here to help you with any questions or issues you may have. You can browse our FAQs, contact our support team, or visit our other pages for more information.",
      },
      {
        title: "How do I upload a podcast?",
        snippet:
          'To upload a podcast, click on the "Welcome" button at the top right, then click on "Upload". Make sure your file meets our format and size requirements then hit "Submit".',
      },
      {
        title: "Can I share podcasts on social media?",
        snippet:
          "Absolutely! You can share any podcast by clicking the 'Share' button found under each podcast and clicking \"Copy URL\".",
      },
      {
        title: "How do I watch a podcast?",
        snippet:
          "Find a podcast that interests you the most in the homepage, click on it, then sit back and enjoy!",
      },
      {
        title: "What to do if I forgot my password?",
        snippet:
          "If you've forgotten your password, go to the login page and click on 'Forgot Password.' Follow the instructions to reset your password.",
      },
      {
        title: "How can I delete my account?",
        snippet:
          "If you wish to delete your account, please contact our support team with your account details, and they will assist you with the process.",
      },
      {
        title: "Is there a limit to how many podcasts I can upload?",
        snippet:
          "Currently, there is no limit to the number of podcasts you can upload, but each podcast file must not exceed our specified size limit.",
      },
      {
        title: "How can I report inappropriate content?",
        snippet:
          "If you come across content that violates our terms, please use the 'Report' button on the podcast page to alert our team for immediate review.",
      },
      {
        title: "Are there any subscription fees?",
        snippet:
          "Our platform is free to use! We might implement a premium feature in the future.",
      },
      {
        title: "Can I download podcasts to listen offline?",
        snippet:
          "Yes, podcasts can be downloaded for offline listening. Just click the download icon next to the podcast episode.",
      },
      {
        title: "How do I find podcasts that interest me?",
        snippet:
          "Use our search tools to browse through different podcasts or use keywords to find specific topics that interest you.",
      },
      {
        title: "Can I upload a podcast without creating an account?",
        snippet:
          "You are required to create an account to have access to uploading podcasts.",
      },
      {
        title: "What audio quality can I expect from the podcasts?",
        snippet:
          "We strive to maintain high audio quality for all podcasts on our platform. Most content is available in standard formats like MP3 with clear, crisp sound.",
      },
      {
        title: "Do you offer any live podcasting features?",
        snippet:
          "Currently, we focus on pre-recorded podcasts, but we're looking into live podcasting features. Stay tuned for future updates!",
      },
      {
        title: "Is there a mobile app available?",
        snippet:
          "Not yet, our mobile app will be available on both iOS and Android platforms starting February 31st 2024!",
      },
      {
        title: "Are there any guidelines for the podcasts?",
        snippet:
          "Yes, we encourage respectful podcasts. Please refrain from using offensive language. See our community guidelines for more details.",
      },
      {
        title: "Can I host my podcast exclusively on your platform?",
        snippet:
          "Yes, we offer exclusive hosting arrangements. Please contact us for more information on the benefits and terms of exclusive hosting.",
      },
    ];

    const filteredResults = webResults.filter((result) =>
      result.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
  }

  return (
    <>
      <HeaderBar />

      <div className="help-container">
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
        <div className="dropdown-list"></div>
      </div>
    </>
  );
}

export default HelpPage;
