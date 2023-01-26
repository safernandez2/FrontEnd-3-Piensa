import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Formul from './Formulario';


const Moda: React.FC = () => {
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
      <Modal title="Editar Usuario" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <Formul/>
      </Modal>
    </>
  );
};

export default Moda;