import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./TermsModal.css";

const TermsModal = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button className="terms-button" onClick={onOpenModal}>
        Terms
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>
          <strong>Terms and Conditions</strong>
        </h2>
        <div className="terms-content">
          <em>Last updated: October 17th, 2023</em>
          <br />
          <br />
          Welcome to Sound Barrier!
          <br />
          <br />
          These terms and conditions outline the rules and regulations for the
          use of Sound Barrier's App.
          <br />
          By accessing this app, we assume you accept these terms and conditions
          in full. Do not continue to use Sound Barrier's app if you do not
          accept all the terms and conditions stated on this page.
          <br />
          <br />
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and any or all Agreements:
          "Client", "You" and "Your" refers to you, the person accessing this
          app and accepting the Company's terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our Company.
          <br />
          <br />
          <strong>Content</strong>
          <br />
          All content uploaded to the app should respect the intellectual
          property rights of others. It's strictly forbidden to upload any
          copyrighted content unless you have the explicit permission of the
          content owner.
          <br />
          <br />
          <strong>Accounts</strong>
          <br />
          You are responsible for safeguarding your account. Use a strong
          password and restrict its use to this account. We cannot and will not
          be liable for any loss or damage arising from your failure to comply
          with the above.
          <br />
          <br />
          <strong>Termination</strong>
          <br />
          We may terminate or suspend access to our app immediately, without
          prior notice or liability, for any reason whatsoever, including,
          without limitation, if you breach the Terms.
          <br />
          <br />
          <strong>Changes</strong>
          <br />
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. By continuing to access or use our app after
          those revisions become effective, you agree to be bound by the revised
          terms.
          <br />
          <br />
          <strong>Limitation of Liability</strong>
          <br />
          In no event shall Sound Barrier, nor its directors, employees,
          partners, agents, suppliers, or affiliates, be liable for any
          indirect, incidental, special, consequential or punitive damages, or
          any loss of profits or revenues, whether incurred directly or
          indirectly, or any loss of data, use, goodwill, or other intangible
          losses, resulting from (a) your access to or use of or inability to
          access or use the app; (b) any unauthorized access to or use of our
          servers and/or any personal information stored therein.
          <br />
          <br />
          <strong>Governing Law</strong>
          <br />
          These Terms shall be governed by and construed in accordance with the
          laws of Canada, without regard to its conflict of law principles.
          <br />
          <br />
          For any further information, please contact us.
        </div>
      </Modal>
    </div>
  );
};

export default TermsModal;
