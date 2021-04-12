import React from "react";
import classes from "./listItems.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const ListItems = (props) => {
  const items = props.items;
  const removeItem = props.removeItem;
  const editItem = props.editItem;

  console.log(items);

  // -----------------------------------------------------------------------------
  // ************** Returns *****************
  return (
    <div className={classes.main}>
      {items.map((item) => {
        const { id, title } = item;
        // console.log("id in list:  ", id, " and title : ", title);
        return (
          <article key={id}>
            <p>{title}</p>
            <div className={classes.buttons}>
              <button type="button">
                <FaEdit
                  className={classes.btnEdit}
                  onClick={() => {
                    editItem(id);
                  }}
                />
              </button>
              <button type="button">
                <FaTrash
                  className={classes.btnDelete}
                  onClick={() => {
                    removeItem(id);
                  }}
                />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListItems;
