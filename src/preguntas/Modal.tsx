import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Formu from './Formulario';

const Modals: React.FC = () => {
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
        Editar
      </Button>
      <Modal title="Editar pregunta" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Formu/>
      </Modal>
    </>
  );
};

export default Modals;