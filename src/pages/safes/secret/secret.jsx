import React, { useState } from "react";
import Modal from "../../../components/modal/modal";
import SecretForm from "../safeForm/SecretForm";
import { useSelector, useDispatch } from "react-redux";
function SecretComponent() {
  return (
    <Modal>
      <SecretForm closeModalHandler={() => setShowModal(false)} />
    </Modal>
  );
}

export default SecretComponent;
