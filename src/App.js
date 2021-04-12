import "./App.css";
import InputSection from "./components/InputSection";
import ListItems from "./components/ListItems";
import React, { useState } from "react";

function App() {
  const [itemInput, setItemInput] = useState("");
  const [items, setItems] = useState([]);

  // Handling submit of input item form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemInput);
    let newListofInputs = {
      id: new Date().getTime().toString(),
      title: itemInput,
    };
    setItems([...items, newListofInputs]);
    setItemInput("");
  };

  // ***************** Returns ********************
  return (
    <div className="main">
      <h2>Grocery Bud</h2>

      <section>
        <form>
          <input
            type="text"
            value={itemInput}
            placeholder="e.g. eggs"
            onChange={(e) => {
              setItemInput(e.target.value);
            }}
          />
          <button type="button" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </section>

      {/* IF I have items in list then display this section otherwise don't display it please... Thank you */}
      {items.length > 0 && (
        <section>
          <ListItems items={items} />
          <button
            type="button"
            className="clearBtn"
            onClick={() => {
              setItems([]);
            }}
          >
            Clear Items
          </button>
        </section>
      )}
    </div>
  );
}

export default App;
