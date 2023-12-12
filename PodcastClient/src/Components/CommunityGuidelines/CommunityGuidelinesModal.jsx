import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./CommunityGuidelinesModal.css";

const CommunityGuidelinesModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button className="guidelines-button" onClick={onOpenModal}>
        Community Guidelines
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>
          <strong>Community Guidelines</strong>
        </h2>
        <div className="guidelines-content">
          <em>Last updated: December 2nd, 2023</em>
          <br />
          <br />
          Welcome to Sound Barrier community!
          <br />
          <br />
          <strong>Be Respectful</strong>
          <br />
          Treat all users with respect. Harassment, hate speech, and bullying
          are strictly prohibited.
          <br />
          <br />
          <strong>Stay Relevant</strong>
          <br />
          Keep your posts and comments relevants to the topic at hand. Spamming
          or off-topic content detracts from the community experience.
          <br />
          <br />
          <strong>Protect Privacy</strong>
          <br />
          Redpect the privacy of others. Do not share personal or sensitive
          information without consent.
          <br />
          <br />
          <strong>Follow the Law</strong>
          <br />
          Illegal content or conduct is not allowed on our platform. This
          includes copyright infringement and other forms of intellectual
          property violations.
          <br />
          <br />
          <strong>Report Violations</strong>
          <br />
          If you encounter content that violates our guidelines, please report
          it to use for review.
          <br />
          <br />
          <strong>Consequence of Violations</strong>
          <br />
          Violations of these guildeines may result in content removal, account
          suspension, or other actions as deemed appropriate.
          <br />
          <br />
          Thank you for being part of our community and helping to create a
          positive and safe environment for everyone.
          <br />
          <br />
          For any further information, please contact us.
        </div>
      </Modal>
    </div>
  );
};

export default CommunityGuidelinesModal;
