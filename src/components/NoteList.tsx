import styled from '@emotion/styled';
import { FaTrash } from 'react-icons/fa';
import { format } from 'date-fns';
import { Note } from '../types/Note';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

const NoteContainer = styled.article`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
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
  color: #333;
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
  color: #666;
  margin-bottom: 0.5rem;
`;

const NoteContent = styled.p`
  margin: 0;
  line-height: 1.6;
  color: #444;
  white-space: pre-wrap;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
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