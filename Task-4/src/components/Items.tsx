import React, { useState, useEffect, useRef } from "react";

interface ItemProps {
  id: number;
  textData: string;
  isEdit: boolean;
  startEditing: (id: number, text: string) => void;
  deleteItem: (id: number) => void;
  saveEdit: (id: number, newText: string) => void;
}

export const Items: React.FC<ItemProps> = ({
  id,
  textData,
  isEdit,
  startEditing,
  deleteItem,
  saveEdit,
}) => {
  const [inputData, setInputData] = useState<string>(textData);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  const editHandle = () => {
    startEditing(id, inputData);
  };

  const delHandle = () => {
    deleteItem(id);
  };

  const saveHandle = () => {
    saveEdit(id, inputData);
  };

  return (
    <li className="items">
      <div className="title" id="title">
        <i className="fa-solid fa-feather-pointed"></i>
      </div>
      <input
        ref={inputRef}
        disabled={!isEdit}
        className="content"
        id="content"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      {isEdit ? (
        <button className="add-btn btn" id="edit-btn" onClick={saveHandle}>
          Update
          <span>
            <i className="fa-solid fa-floppy-disk"></i>
          </span>
        </button>
      ) : (
        <button className="btns edit-btn btn" onClick={editHandle}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      )}
      {!isEdit && (
        <button className="btns del-btn btn" onClick={delHandle}>
          <i className="fa-solid fa-trash"></i>
        </button>
      )}
    </li>
  );
};
