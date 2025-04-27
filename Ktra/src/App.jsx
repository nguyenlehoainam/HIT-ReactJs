import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteItem from "./components/NoteItem/NoteItem";
import "./components/NoteItem/NoteItem.scss";
function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, { id: Date.now(), ...newNote }]);
  };

  const updateNote = (updatedNote) => {
    if (!updatedNote) {
      setEditingNote(null);
      return;
    }
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  return (
    <div>
      <h1>Quản Lý Ghi Chú</h1>
      <NoteForm
        onAdd={addNote}
        onUpdate={updateNote}
        editingNote={editingNote}
      />
      <h2>Danh sách ghi chú</h2>

      {notes.length === 0 ? (
        <p>Chưa có ghi chú nào.</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={handleEdit}
            onDelete={deleteNote}
          />
        ))
      )}
    </div>
  );
}

export default App;
