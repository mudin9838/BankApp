import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tag } from "../types/Types";
import axios from "axios";
import { Button, TextField } from "@mui/material";

function EditTag() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [tagDetails, settagDetails] = useState({
    id: "",
    name: "",
  });

  const [count, setcount] = useState(0)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    // console.log(tagDetails)
    settagDetails({ ...tagDetails, name: event.target.value });
   console.log( setcount(count))

  };
  useEffect(() => {
    axios.get(`https://localhost:7105/api/Tag/${id}`).then((result) => {
      let responseJson = result;
      if (responseJson) {
        console.log("error log", responseJson);
        
        settagDetails({
          id: responseJson.data.id,
          name: responseJson.data.name,
          // Add more properties as needed
        });
      } else if (!responseJson) {
        alert("No Tag Id found!");
      }
    });
  }, [id]);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const data: Tag = {
      id: tagDetails.id,
      name: tagDetails.name,
    };

    await axios
      .put(`https://localhost:7105/api/Tag/${id}`, data)
      .then((res) => {
        let responseJson = res;
        console.log(res);
        if (responseJson) {
          console.log(responseJson);
         
          alert("Tag Updated Successfully!");
          navigate("/");
        } else {
          alert("Failed! Somthing went wrong");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <>
        <form onSubmit={handleFormSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={tagDetails.name}
            onChange={handleChange}
          />
          <Button color="primary" type="submit">
            Update Tag
          </Button>
        </form>
      </>
    </div>
  );
}

export default EditTag;
