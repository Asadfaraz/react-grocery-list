import "./App.css";
import Alert from "./components/Alert";
import ListItems from "./components/ListItems";
import React, { useState, useEffect } from "react";

function App() {
  const [itemInput, setItemInput] = useState("");
  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: "", value: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  // -------------------------------------------------------------------------------------
  // Handling submit of input item form
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(itemInput);
    if (!itemInput) {
      // alert negative
      alertFunction(true, "danger", "Enter a Value");

      // ______________________________________
    } else if (itemInput && isEdit) {
      // alert positive
      setItems(
        items.map((item) => {
          if (item.id == editId) {
            console.log("id match");
            return { ...item, title: itemInput };
          }
          return item;
        })
      );

      alertFunction(true, "success", "Item Edited Successfully");
      setIsEdit(false);
      setItemInput("");

      // _______________________________________
    } else {
      let newListofInputs = {
        id: new Date().getTime().toString(),
        title: itemInput,
      };
      setItems([...items, newListofInputs]);
      alertFunction(true, "success", "Item Added Successfully");
      setItemInput("");
    }
  };
  // -------------------------------------------------------------------------------------
  // Setting alert function to decrease code
  const alertFunction = (show = false, type = "", value = "") => {
    let alertValue = {
      show,
      type,
      value,
    };
    setAlert(alertValue);
  };

  // -------------------------------------------------------------------------------------
  const removeItem = (id) => {
    const newItems = items.filter((item) => {
      return item.id != id;
    });
    setItems(newItems);
    alertFunction(true, "danger", "Item Deleted...");
  };

  // ---------------------------------------------------------------------------------------------
  const editItem = (id) => {
    let specificItem = items.find((item) => {
      return item.id == id;
    });
    setItemInput(specificItem.title);

    setIsEdit(true);
    setEditId(id);
  };

  // ---------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------
  // ***************** Returns ********************
  return (
    <div className="main">
      {alert.show && (
        <Alert alert={alert} disappear={alertFunction} items={items} />
      )}
      {/* {alert.show && alert.type == "danger" && <p>{alert.value}</p>} */}

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
            {isEdit ? "Edit" : "Add Item"}
          </button>
        </form>
      </section>

      {/* IF I have items in list then display this section otherwise don't display it please... Thank you */}
      {items.length > 0 && (
        <section>
          <ListItems
            items={items}
            removeItem={removeItem}
            editItem={editItem}
          />
          <button
            type="button"
            className="clearBtn"
            onClick={() => {
              setItems([]);
              alertFunction(true, "danger", "List Cleared!!!");
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
