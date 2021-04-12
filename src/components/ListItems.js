import React from "react";
import classes from "./listItems.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const ListItems = () => {
  return (
    <div className={classes.main}>
      <article>
        <p>Item 1</p>
        <div className={classes.buttons}>
          <button type="button">
            <FaEdit className={classes.btnEdit} />
          </button>
          <button type="button">
            <FaTrash className={classes.btnDelete} />
          </button>
        </div>
      </article>

      <button type="button" className={classes.clearBtn}>
        Clear Items
      </button>
    </div>
  );
};

export default ListItems;
