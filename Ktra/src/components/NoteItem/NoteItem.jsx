import React from "react";
import "./NoteItem.scss";

function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div>
      <table>
        <tr className="NoteItemTable">
          <td>
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              <b>Tiêu Đề </b>
            </p>
            {note.title || "Không có tiêu đề"}
          </td>
          <td>
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              <b>Nội Dung </b>
            </p>

            {note.content || "Không có nội dung"}
          </td>
          <button onClick={() => onEdit(note)}>Sửa</button>
          <button onClick={() => onDelete(note.id)}>Xóa</button>
        </tr>
      </table>
    </div>
  );
}

export default NoteItem;
