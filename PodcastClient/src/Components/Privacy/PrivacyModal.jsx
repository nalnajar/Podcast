import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./PrivacyModal.css";

const PrivacyModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button className="privacy-button" onClick={onOpenModal}>
        Privacy
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>
          <strong>Privacy Policy</strong>
        </h2>
        <div className="privacy-content">
          <em>Last updated: October 17th, 2023</em>
          <br />
          <br />
          Welcome to Sound Barrier!
          <br />
          <br />
          We respect your privacy and are committed to protecting personally
          identifiable information you may provide us through the App. This
          Privacy Policy applies only to information we collect through the App
          and does not apply to our collection of information from other
          sources.
          <br />
          <br />
          <strong>Information We Collect</strong>
          <br />
          Our App typically collects two kinds of information about you: (a)
          information that you provide that personally identifies you; and (b)
          information that does not personally identify you, which we
          automatically collect when you use our App or that you provide us.
          <br />
          <br />
          <strong>Usage Data</strong>
          <br />
          We may also collect information about how the App is accessed and
          used. This Usage Data may include information such as your computer's
          IP address, browser type, browser version, the pages of our App that
          you visit, the time and date of your visit, the time spent on those
          pages, and other diagnostic data.
          <br />
          <br />
          <strong>Tracking & Cookies</strong>
          <br />
          We use cookies and similar tracking technologies to track activity on
          our App and we hold certain information. Cookies are files with a
          small amount of data which may include an anonymous unique identifier.
          <br />
          <br />
          <strong>Security</strong>
          <br />
          The security of your personal information is important to us but
          remember that no method of transmission over the Internet or method of
          electronic storage is 100% secure. While we strive to use commercially
          acceptable means to protect your personal information, we cannot
          guarantee its absolute security.
          <br />
          <br />
          <strong>Links To External Sites</strong>
          <br />
          Our App may contain links to external sites that are not operated by
          us. If you click on a third-party link, you will be directed to that
          third party's site. We advise you to review the Privacy Policy and the
          terms and conditions of every site you visit.
          <br />
          <br />
          <strong>Children's Privacy</strong>
          <br />
          Our service does not address anyone under the age of 18. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 18.
          <br />
          <br />
          <strong>Changes To This Privacy Policy</strong>
          <br />
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
          <br />
          <br />
          For any further information, please contact us.
        </div>
      </Modal>
    </div>
  );
};

export default PrivacyModal;
