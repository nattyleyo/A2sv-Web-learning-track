import React, { useState } from "react";

interface ContProps {
  addItems: (item: string) => void;
}
export const Content: React.FC<ContProps> = ({ addItems }) => {
  const [inputData, setInputData] = useState<string>("");
  const addHandle = () => {
    // inputdata
    addItems(inputData);
    setInputData("");
  };

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };
  return (
    <div className="cont">
      <input
        type="text"
        value={inputData}
        placeholder="add list be added"
        className="text-inp"
        id="text-inp"
        onChange={change}
      />
      <button className="add-btn btn" id="add-btn" onClick={addHandle}>
        Add
        <span>
          <i className="fa-solid fa-plus"></i>
        </span>
      </button>
    </div>
  );
};
