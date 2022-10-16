import "../style.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Total: 12 },
  { name: "Feb", Total: 5 },
  { name: "Mar", Total: 8 },
  { name: "Apr", Total: 16 },
  { name: "May", Total: 9 },
  { name: "Jun", Total: 17 },
  { name: "Jul", Total: 12 },
  { name: "Aug", Total: 13 },
  { name: "Sep", Total: 8 },
  { name: "Oct", Total: 16 },
  { name: "Nov", Total: 9 },
  { name: "Dec", Total: 6 },
];

const Chart = ({ aspect, title, summary }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart data={summary.data}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#007AFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#007AFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
