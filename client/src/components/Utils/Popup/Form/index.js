import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(e);
        onSubmit(e);
      }}
    >
      <div className="form-group">
        <input
          className="form-control"
          id="user"
          placeholder="Enter the Connection User"
        />
      </div>
      <div className="form-group">
        <input className="form-control" id="host" placeholder="Enter Host " />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          id="port"
          type="number"
          placeholder="Enter Port"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          id="password"
          placeholder="Enter the Database Password"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          id="database"
          placeholder="Enter the Database Name"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          id="name"
          placeholder="Enter the Connection Name"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
export default Form;
