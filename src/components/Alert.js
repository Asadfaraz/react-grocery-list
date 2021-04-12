import React, { useEffect } from "react";

const Alert = (props) => {
  const alert = props.alert;
  const alertFunction = props.disappear;
  console.log(alert);

  // useEffect to disappear alert after some time
  useEffect(() => {
    const timeout = setTimeout(() => {
      alertFunction();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // *************** Returns **************
  return (
    <div>
      <p>{alert.value}</p>
    </div>
  );
};

export default Alert;
