import styled from '@emotion/styled';
import { FaPlus } from 'react-icons/fa';

interface NewNoteButtonProps {
  onClick: () => void;
}

const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background: #0056b3;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const NewNoteButton: React.FC<NewNoteButtonProps> = ({ onClick }) => {
  return (
    <FloatingButton
      onClick={onClick}
      aria-label="Create new note"
      title="Create new note"
    >
      <FaPlus />
    </FloatingButton>
  );
};

export default NewNoteButton; 