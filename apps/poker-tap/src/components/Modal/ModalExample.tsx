import { useState } from "react";
import Modal from "./Modal.tsx";
import Button from "../Button/Button.tsx";
import styled from "styled-components";
import { colors } from "../../Colors.styles.ts";

const ExampleContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ModalContent = styled.div`
  padding: 20px;
  color: ${colors.neutrals.white};
  
  p {
    margin-bottom: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

function ModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ExampleContainer>
      <h2>Modal Component Example</h2>

      <Button
        label="Open Modal"
        onClick={openModal}
        hasTextShadow
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Example Modal"
        width="90%"
      >
        <ModalContent>
          <p>This is an example of the Modal component.</p>
          <p>You can put any content here, including text, images, forms, etc.</p>

          <ButtonContainer>
            <Button
              label="Close"
              onClick={closeModal}
              hasTextShadow
            />
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </ExampleContainer>
  );
}

export default ModalExample;
