import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Adduser from "./Addusuario"
import Api from "./Api"
import "./User.css"

const Secondmodal: React.FC = () => {
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
        Agregar usuario
      </Button>
      <Modal title="Ingrese los datos para agregar al usuario" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Api/>
      </Modal>
    </>
  );
};

export default Secondmodal;