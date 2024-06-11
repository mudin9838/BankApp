import axios from "axios";
import React, { useEffect, useState } from "react";
import { PageEnum, Tag } from "../types/Types";
import TagSummary from "./TagSummary";


function Tags() {
  const [tagList, setTagList] = useState<Tag[] | null>(null);


  useEffect(() => {
    const url = "https://localhost:7105/api/Tag";

    axios.get(url).then((response) => {
      setTagList(response.data);
    });
  }, []);

  
  return (
    <>
          <TagSummary tag={tagList} />
     </>
  );
}
export default Tags;
