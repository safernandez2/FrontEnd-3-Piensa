import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Addevaluacion from './Addevaluacion';
const Modal2: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Agregar evaluacion
      </Button>
      <Modal title="Ingrese los datos para agregar una evaluacion" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Addevaluacion/>      
      </Modal>
    </>
  );
};

export default Modal2;