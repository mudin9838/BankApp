import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Tag } from "../types/Types";
import axios from "axios";

const AddTag = () => {
  const [name, setName] = useState("");
  const onNameChangeHandler = (e: any) => {
    setName(e.target.value);
  };
  const handleSubmitHandler = async (e: any) => {
    e.preventDefault();
    const data: Tag = {
      name: name,
    };

    await axios
      .post("https://localhost:7105/api/Tag", data)
      .then((res) => {
        let responseJson = res;
        if (responseJson) {
          console.log(responseJson);
          alert("Tag Added Successfully!");

          // navigate("/dashboard/roles");
        }
      })
      .catch((e) => {
        alert("Failed! Somthing went wrong");
        console.log(e);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmitHandler}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={onNameChangeHandler}
        />
        <Button color="primary" type="submit">
          Add Tag
        </Button>
      </form>
    </>
  );
};

export default AddTag;
