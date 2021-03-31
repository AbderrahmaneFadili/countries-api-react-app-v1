import React from "react";
import { Link, useHistory } from "react-router-dom";

const Details = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Details</h1>
      <Link onClick={() => history.goBack()}>Go Back</Link>
    </div>
  );
};

export default Details;
