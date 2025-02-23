import styled from '@emotion/styled';
import { FaTrash } from 'react-icons/fa';
import { format } from 'date-fns';
import { Note } from '../types/Note';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

const NoteContainer = styled.article`
  background: var(--bg-primary);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: transform 0.2s, background-color 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border-color);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px var(--shadow-color);
  }
`;

const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const NoteTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #cc0000;
  }

  &:focus {
    outline: 2px solid #ff4444;
    outline-offset: 2px;
  }
`;

const NoteDate = styled.time`
  display: block;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
`;

const NoteContent = styled.p`
  margin: 0;
  line-height: 1.6;
  color: var(--text-primary);
  white-space: pre-wrap;
  transition: color 0.3s ease;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
`;

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  if (notes.length === 0) {
    return (
      <EmptyState>
        <h2>No notes yet</h2>
        <p>Create your first note by clicking the button below!</p>
      </EmptyState>
    );
  }

  return (
    <section>
      {notes.map((note) => (
        <NoteContainer key={note.id}>
          <NoteHeader>
            <NoteTitle>{note.title}</NoteTitle>
            <DeleteButton
              onClick={() => onDelete(note.id)}
              aria-label={`Delete note: ${note.title}`}
              title="Delete note"
            >
              <FaTrash />
            </DeleteButton>
          </NoteHeader>
          <NoteDate dateTime={note.createdAt}>
            {format(new Date(note.createdAt), 'PPP')}
          </NoteDate>
          <NoteContent>{note.content}</NoteContent>
        </NoteContainer>
      ))}
    </section>
  );
};

export default NoteList; 