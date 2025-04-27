import React, { useState, useEffect } from "react";
import "./NoteForm.scss";

function NoteForm({ onAdd, onUpdate, editingNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title || "");
      setContent(editingNote.content || "");
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() || content.trim()) {
      if (editingNote) {
        onUpdate({ id: editingNote.id, title, content });
      } else {
        onAdd({ title, content });
      }
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="NoteFormContainer">
      <form onSubmit={handleSubmit}>
        <div className="NoteFormTitle">
          <div>
            <label htmlFor="title">Tiêu đề:</label>
            <input
              className="TiltleInput"
              type="text"
              id="title"
              placeholder="Nhập tiêu đề ghi chú"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="content">Nội dung:</label>
            <input
              type="text"
              className="ContentInput"
              id="content"
              placeholder="Nhập nội dung ghi chú"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <button className="updateButton" type="submit">
          {editingNote ? "Cập nhật" : "Thêm"}
        </button>
        {editingNote && (
          <button className="cancelButton" onClick={() => onUpdate(null)}>
            Hủy
          </button>
        )}
      </form>
    </div>
  );
}

export default NoteForm;
