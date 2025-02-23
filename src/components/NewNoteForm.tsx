import { useState } from 'react';
import styled from '@emotion/styled';
import { Note } from '../types/Note';

interface NewNoteFormProps {
  onSubmit: (note: Omit<Note, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

const FormContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg-primary);
  padding: 1rem;
  box-shadow: 0 -2px 10px var(--shadow-color);
  border-radius: 12px 12px 0 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px var(--shadow-color);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px var(--shadow-color);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  background: ${props => props.variant === 'primary' ? 'var(--accent-color)' : 'var(--bg-secondary)'};
  color: ${props => props.variant === 'primary' ? '#ffffff' : 'var(--text-primary)'};

  &:hover {
    background: ${props => props.variant === 'primary' ? '#0056b3' : 'var(--bg-hover)'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.variant === 'primary' ? 'rgba(0, 123, 255, 0.5)' : 'var(--shadow-color)'};
  }
`;

const NewNoteForm: React.FC<NewNoteFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onSubmit({
      title: title.trim(),
      content: content.trim(),
    });

    setTitle('');
    setContent('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          required
          aria-label="Note title"
        />
        <Textarea
          placeholder="Write your note here..."
          value={content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
          required
          aria-label="Note content"
        />
        <ButtonGroup>
          <Button type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save Note
          </Button>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default NewNoteForm; 