import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Note } from './types/Note';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NewNoteButton from './components/NewNoteButton';
import NewNoteForm from './components/NewNoteForm';
import { ThemeProvider } from './context/ThemeContext';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  background: var(--bg-primary);
  min-height: 100vh;
  transition: background-color 0.3s ease;
`;

const Main = styled.main`
  padding-top: 80px; // Account for fixed header
  padding-bottom: 80px; // Space for new note button
`;

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const addNote = (note: Omit<Note, 'id' | 'createdAt'>) => {
    const newNote: Note = {
      ...note,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setIsFormVisible(false);
  };

  const deleteNote = (id: string) => {
    if (window.confirm('Are you sure you want to delete this note? This action cannot be undone.')) {
      const updatedNotes = notes.filter(note => note.id !== id);
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }
  };

  return (
    <ThemeProvider>
      <AppContainer>
        <Header />
        <Main>
          <NoteList notes={notes} onDelete={deleteNote} />
          {isFormVisible ? (
            <NewNoteForm onSubmit={addNote} onCancel={() => setIsFormVisible(false)} />
          ) : (
            <NewNoteButton onClick={() => setIsFormVisible(true)} />
          )}
        </Main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
