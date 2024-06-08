import axios from "axios";
import React, { useEffect, useState } from "react";
import { PageEnum, Tag } from "../types/Types";
import TagSummary from "./TagSummary";
import { Card, Typography } from "@material-tailwind/react";
import { Button } from "@mui/material";
import AddTag from "./AddTag";

function Tags() {
  const [tagList, setTagList] = useState<Tag[] | null>(null);
  const [shownPage, setShownPage] = useState(PageEnum.list);

  useEffect(() => {
    const url = "https://localhost:7105/api/Tag";

    axios.get(url).then((response) => {
      setTagList(response.data);
    });
  }, []);

  const onAddTagHandler = () => {
    setShownPage(PageEnum.add);
  };
  const ShowListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addTag = (data: Tag) => {
    setTagList([...tagList, data]); //first take list tag list then update data/push the record into array
  };

  return (
    <>
      {shownPage === PageEnum.list && (
        <>
          <Button onClick={onAddTagHandler}>Add Tag</Button>
          <TagSummary tag={tagList} />
        </>
      )}
      {shownPage === PageEnum.add && <AddTag handleSubmit={addTag} />}
    </>
  );
}
export default Tags;
