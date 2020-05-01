import React from "react";

//export default () => {return <p>De fout ligt in dit gedeelte</p>};

import { useField } from "../hooks";
import { useDispatch } from "react-redux";
import { getSuperheroes } from "../data/superheroes";
import { Input, TextField, Button, IconButton } from "@material-ui/core";
import SearchIcon  from "@material-ui/icons/Search";

export default () => {
  const { error, setError, setValue, ...field } = useField("", true);
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    if (field.value !== "") {
      setValue("");
      dispatch(getSuperheroes(field.value));
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <TextField
          {...field}
          id="standard-secondary"
          label="Enter Superhero Name"
          color="secondary"
          className={error ? "error" : ""}
        />    
        <IconButton type="submit">
          <SearchIcon/>
        </IconButton>
      </form>
    </>
  );
};
