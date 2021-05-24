import React from "react";
import "./index.css";
import { Container } from "./Container";

const Main = ({ onSubmit }) => {
  const triggerText = "Create Connection";
  return (
    <div className="App">
      <Container
        triggerText={triggerText}
        onSubmit={(e) => {
          e.preventDefault(e);
          onSubmit(e);
        }}
      />
    </div>
  );
};

export default Main;
