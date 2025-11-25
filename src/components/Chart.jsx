import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 5000 },
  { day: "Tue", value: 7000 },
  { day: "Wed", value: 9000 },
  { day: "Thu", value: 11000 },
  { day: "Fri", value: 13000 },
  { day: "Sat", value: 14000 },
  { day: "Sun", value: 15210 },
];

const Chart = () => (
  <div className="bg-white shadow rounded p-6">
    <h3 className="text-lg font-semibold mb-4">Overall Statistics</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis domain={[1000, 25000]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#22C55E"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
