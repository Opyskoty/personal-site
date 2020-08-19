import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ContactModal.css"
import resume from "./Olivia_Pyskoty_Resume.pdf"


function ContactModal({ toggle, modal, className }) {
  const emailLink = "mailto:olivia.pyskoty@gmail.com";
  const linkedInLink = "https://www.linkedin.com/in/olivia-pyskoty-5591b2104/";
  const gitHubLink = "https://github.com/Opyskoty";

  return (
    <div className="ContactModal">
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="contactLink">Contact Me</ModalHeader>
        <ModalBody className="text-center">
          <p>
            <a className="contactLink" href={emailLink}>Email</a>
          </p>
          <p>
            <a className="contactLink" href={linkedInLink} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <a className="contactLink" href={gitHubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
          <p>
            <a className="contactLink" href={resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={toggle} className="contactLink">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ContactModal;
