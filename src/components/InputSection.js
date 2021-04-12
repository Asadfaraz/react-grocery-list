import React from "react";
import classes from "./inputSection.module.css";

const InputSection = () => {
  return (
    <div>
      <form>
        <input type="text" value="" placeholder="e.g. eggs" />
        <button type="button">Add</button>
      </form>
    </div>
  );
};

export default InputSection;
