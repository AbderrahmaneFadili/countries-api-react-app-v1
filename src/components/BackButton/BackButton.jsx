import React from "react";
import { Button, LeftArrow } from "./BackButton.styles";
import { useHistory } from "react-router-dom";
const BackButton = () => {
  const history = useHistory();
  return (
    <Button onClick={() => history.goBack()}>
      <LeftArrow size={25} />
      Back
    </Button>
  );
};

export default BackButton;
