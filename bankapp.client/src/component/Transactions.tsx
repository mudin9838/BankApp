import axios from "axios";
import React, { useEffect, useState } from "react";
import { Transaction } from "../types/Types";
import { Line } from "react-chartjs-2";

import type { ChartData, ChartOptions } from "chart.js";
import TransactionSummary from "./TransactionSummary";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Transactions() {
  const [transaction, setTransaction] = useState<Transaction[] | null>(null);
  const [selected, setSelected] = useState<Transaction | null>(); //instead of array we're returning a single value
  const [data, SetData] = useState<ChartData<"line">>(); //line- is the type we want to display
  const [options, SetOptions] = useState<ChartOptions<"line">>({
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  });
  useEffect(() => {
    const url = "https://localhost:7105/api/Transaction";

    axios.get(url).then((response) => {
      setTransaction(response.data);
    });
  }, []);
  return (
    <>
      <div className="App">
        <select
          name="title"
          className="w-auto"
          onChange={(e) => {
            const c = transaction?.find((x) => x.id === e.target.value);
            //  setSelected(c);
            axios
              .get("https://localhost:7105/api/Transaction")
              .then((response) => {
                console.log(response.data.amount);
                SetData({
                  labels: response.data.map((transaction: Transaction) =>
                    moment(transaction.dateTime).format("MM/DD/YYYY")
                  ),
                  datasets: [
                    // {
                    //   label: "transactionType",
                    //   data: response.data.map(
                    //     (transaction: Transaction) =>
                    //       transaction.transactionType
                    //   ),
                    //   borderColor: "rgb(53, 162, 235)",
                    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
                    // },
                    {
                      label: "Amount",
                      data: response.data.map(
                        (transaction: Transaction) => transaction.amount
                      ),
                      borderColor: "rgb(255, 99, 132)",
                      backgroundColor: "rgba(255, 99, 132, 0.5)",
                    },
                  ],
                });
              });
          }}
          defaultValue="default"
        >
          <option value="default">Choose a title</option>
          {transaction
            ? transaction.map((transaction) => {
                return (
                  <option key={transaction.id} value={transaction.id}>
                    {moment(transaction.dateTime).format("MM-DD-YYYY")}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      {selected ? <TransactionSummary transaction={selected} /> : null}

      {data ? (
        <div className="w-600">
          <Line options={options} data={data} />
        </div>
      ) : null}
    </>
  );
}
export default Transactions;
