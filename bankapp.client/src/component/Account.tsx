import axios from "axios";
import React, { useEffect, useState } from "react";
import { Account } from "../types/Types";
import { Select, Option } from "@material-tailwind/react";
import AccountSummary from "./AccountSummary";

function Home() {
  const [account, setAccount] = useState<Account[] | null>(null);
  const [selected, setSelected] = useState<Account | null>(); //instead of array we're returning a single value
  useEffect(() => {
    const url = "https://localhost:7105/api/Account";

    axios.get(url).then((response) => {
      setAccount(response.data);
    });
  }, []);
  return (
    <>
      <div className="App">
        <select
          name="title"
          className="w-auto"
          onChange={(e) => {
            const c = account?.find((x) => x.id === e.target.value);
            setSelected(c);
          }}
          defaultValue="default"
        >
          <option value="default">Choose a title</option>
          {account
            ? account.map((account) => {
                return (
                  <option key={account.id} value={account.id}>
                    {account.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      {selected ? <AccountSummary account={selected} /> : null}
    </>
  );
}
export default Home;
