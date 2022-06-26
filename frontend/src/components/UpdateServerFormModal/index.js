import React, { useState } from 'react';
import EditIcon from "@material-ui/icons/Edit"
import { Modal } from '../../context/Modal';
import UpdateServerForm from './UpdateServerForm';

import './UpdateServerForm.css';

function UpdateServerFormModal({server}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <EditIcon style={{fontSize: '12px'}} onClick={() => setShowModal(true)}/>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateServerForm server={server} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default UpdateServerFormModal;