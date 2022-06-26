import React, { useState } from 'react';
import AddIcon from "@material-ui/icons/Add"
import { Modal } from '../../context/Modal';
import CreateServerForm from './CreateServerForm';

import './CreateServerForm.css';

function CreateServerFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AddIcon onClick={() => setShowModal(true)}/>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateServerForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateServerFormModal;

