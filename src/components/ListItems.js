import React from "react";

const ListItems = () => {
  return (
    <div>
      <article>
        <p>Item 1</p>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </article>

      <button type="button">Clear Items</button>
    </div>
  );
};

export default ListItems;
