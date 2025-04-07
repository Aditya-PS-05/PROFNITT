import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConsultancyPOP() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShowModal}
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "0.9rem",
          borderRadius: "35px",
          backgroundColor: "#0328EE",
          color: "white",
        }}
      >
        Consultancy
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Email: <span>111122005@nitt.edu</span>
            Mobile Number: <span>6386202355</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            style={{ backgroundColor: "pink", color: "white" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConsultancyPOP;