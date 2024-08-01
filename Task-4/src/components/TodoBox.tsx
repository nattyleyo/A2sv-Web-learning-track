import React, { useState } from "react";
import "../index.css";
import { Content } from "./Content";
import { Empty } from "./Empty";
import { Items } from "./Items";

export default function TodoBox() {
  const [items, setItems] = useState<string[]>([]);
  const [isEdit, setIsEdit] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>("");

  const addItem = (item: string) => {
    setItems([...items, item]);
  };

  const startEditing = (id: number, text: string) => {
    setIsEdit(id);
    setNewText(text);
  };

  const saveEdit = (id: number, newText: string) => {
    const updatedItems = items.map((item, index) =>
      index === id ? newText : item
    );
    setItems(updatedItems);
    setIsEdit(null);
  };

  const deleteItem = (id: number) => {
    const updatedItems = items.filter((_, index) => index !== id);
    setItems(updatedItems);
  };

  return (
    <>
      <h1>
        To<span>Do</span>List<span>.</span>
      </h1>
      <Content addItems={addItem} />
      {items.length <= 0 ? (
        <Empty />
      ) : (
        <ul className="list-add">
          {items.map((item, index) => (
            <Items
              key={index}
              id={index}
              textData={item}
              startEditing={startEditing}
              isEdit={isEdit === index}
              saveEdit={saveEdit}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      )}
    </>
  );
}
