import React, { useEffect } from "react";
import classes from "./alert.module.css";

const Alert = (props) => {
  const alert = props.alert;
  const alertFunction = props.disappear;
  const items = props.items;
  console.log(alert);

  // useEffect to disappear alert after some time
  useEffect(() => {
    const timeout = setTimeout(() => {
      alertFunction();
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [items]);

  // *************** Returns **************
  return (
    <div
      className={
        (classes.alertDiv,
        alert.type == "success" ? classes.green : classes.red)
      }
    >
      <p>{alert.value}</p>
    </div>
  );
};

export default Alert;
