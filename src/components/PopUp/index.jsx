import React from "react";
import Modal from "react-modal";
import Button from "../Button";
import Link from "next/link"; // Importando o Link do Next.js

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
        <Link href="/login"> {/* Usando o Link para redirecionar */}
          <a> {/* O componente `Link` requer uma âncora (`<a>`) como filho */}
            <Button onClick={onClose} label="Fechar">
              Continuar
            </Button>
          </a>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessPopup;
