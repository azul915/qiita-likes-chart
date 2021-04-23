//import "./styles.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";

function App() {
  const data = [
    { name: "04/17", lgtm: 76 },
    { name: "04/18", lgtm: 77 },
    { name: "04/19", lgtm: 72 },
    { name: "04/20", lgtm: 75 },
    { name: "04/21", lgtm: 68 },
    { name: "04/22", lgtm: 73 },
    { name: "04/23", lgtm: 78 },
    { name: "04/24", lgtm: 83 },
    { name: "04/25", lgtm: 84 }
  ];
  return (
    <div className="App">
      <LineChart
        width={700}
        height={500}
        data={data}
        margin={{
          top: 50,
          right: 20,
          left: 50,
          bottom: 20
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          domain={["dataMin", "dataMax"]}
          interval="preserveStartEnd"
          label={{
            value: "日付",
            offset: -10,
            position: "insideBottomRight"
          }}
        />
        <YAxis
          interval="preserveStartEnd"
          label={{
            value: "LGTM",
            angle: 90,
            position: "insideLeft"
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="lgtm"
          stroke="#8884d8"
          fill="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
}

export default App;
