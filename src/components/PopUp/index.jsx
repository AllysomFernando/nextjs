import React from "react";
import Modal from "react-modal";
import Button from "../Button";
import Link from "../Link";

const SuccessPopup = ({ isOpen, onClose }) => {
  return (
    <Modal
      className="modalOverlay"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Formulário Cadastrado com Sucesso"
    >
      <div className="modalContent">
        <h2>Formulário Cadastrado com Sucesso!</h2>
        <Button onClick={onClose} label="Fechar">
          {" "}
        </Button>
      </div>
    </Modal>
  );
};

export default SuccessPopup;
