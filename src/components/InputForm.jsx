import { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 空白時に追加できないようにする
    if (inputText == "") {
      return true;
    }

    // タスクを追加する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);

    // 入力した文字を消す
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};
