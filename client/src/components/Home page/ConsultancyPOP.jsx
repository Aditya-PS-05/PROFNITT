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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
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
