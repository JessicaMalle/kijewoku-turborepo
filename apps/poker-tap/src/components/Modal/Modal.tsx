import { useRef, useEffect, type ReactNode } from "react";
import { StyledDialog, DialogContent, DialogHeader, CloseButton, DialogTitle } from "./Modal.styles.ts";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: string;
}

function Modal({ isOpen, onClose, title, children, width = "80%" }: ModalProps): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialogDimensions = dialogRef.current?.getBoundingClientRect();
    if (!dialogDimensions) return;

    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      onClose();
    }
  };

  return (
    <StyledDialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      $width={width}
    >
      <DialogContent>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          <CloseButton type="button" onClick={onClose}>
            ×
          </CloseButton>
        </DialogHeader>
        {children}
      </DialogContent>
    </StyledDialog>
  );
}

export default Modal;
