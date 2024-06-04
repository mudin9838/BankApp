import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tag } from "../types/Types";
import { Select, Option } from "@material-tailwind/react";
import TagSummary from "./TagSummary";

function Home() {
  const [tag, setTags] = useState<Tag[] | null>(null);
  const [selected, setSelected] = useState<Tag | null>(); //instead of array we're returning a single value
  useEffect(() => {
    const url = "https://localhost:7105/api/Tag";

    axios.get(url).then((response) => {
      setTags(response.data);
    });
  }, []);
  return (
    <>
      <div className="App">
        <select
          name="title"
          className="w-auto"
          onChange={(e) => {
            const c = tag?.find((x) => x.id === e.target.value);
            setSelected(c);
          }}
          defaultValue="default"
        >
          <option value="default">Choose a title</option>
          {tag
            ? tag.map((tag) => {
                return (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      {selected ? <TagSummary tag={selected} /> : null}
    </>
  );
}
export default Home;
