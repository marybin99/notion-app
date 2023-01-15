import React, { useState } from "react";
import Notion from "./Notion";

function InputNotion() {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");

  const onChangeId = (e) => {
    setValue(e.target.value);
  };

  const onClickHandler = () => {
    setUrl(value);
  };

  return (
    <>
      <div>
        <input type="text" name="id" onChange={onChangeId} value={value} />
        <button onClick={onClickHandler}>등록</button>
        <Notion value={url}></Notion>
      </div>
    </>
  );
}

export default InputNotion;
