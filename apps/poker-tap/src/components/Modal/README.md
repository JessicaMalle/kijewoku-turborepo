# Modal Component

A reusable modal dialog component for the poker-tap project that uses the HTML `<dialog>` element.

## Features

- Uses the native HTML `<dialog>` element for better accessibility and performance
- Styled to match the poker-tap project design system
- Closes when clicking outside the modal
- Customizable width
- Optional title
- Fully typed with TypeScript

## Usage

```tsx
import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button/Button";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Button 
        label="Open Modal" 
        onClick={openModal}
        hasTextShadow
      />
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title="My Modal Title"
        width="90%"
      >
        <div style={{ padding: "20px" }}>
          <p>This is the modal content.</p>
          
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
            <Button 
              label="Close" 
              onClick={closeModal}
              hasTextShadow
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | boolean | required | Controls whether the modal is open or closed |
| onClose | () => void | required | Function to call when the modal should be closed |
| title | string | undefined | Optional title to display in the modal header |
| children | ReactNode | required | Content to display inside the modal |
| width | string | "80%" | Width of the modal (CSS value) |

## Styling

The Modal component uses styled-components and follows the poker-tap project's design system. You can customize the appearance by importing and extending the styled components:

```tsx
import { StyledDialog, DialogContent, DialogHeader, DialogTitle, CloseButton } from "../components/Modal";
import styled from "styled-components";

const CustomDialogContent = styled(DialogContent)`
  background-color: #your-color;
`;
```

## Example

See `ModalExample.tsx` for a complete example of how to use the Modal component.
