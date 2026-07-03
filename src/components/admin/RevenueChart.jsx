import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "../../assets/css/Admin.css";

const data = [
  { month: "Jan", revenue: 18000 },
  { month: "Feb", revenue: 24000 },
  { month: "Mar", revenue: 28000 },
  { month: "Apr", revenue: 35000 },
  { month: "May", revenue: 42000 },
  { month: "Jun", revenue: 48000 },
  { month: "Jul", revenue: 53000 },
  { month: "Aug", revenue: 62000 },
  { month: "Sep", revenue: 70000 },
  { month: "Oct", revenue: 82000 },
  { month: "Nov", revenue: 93000 },
  { month: "Dec", revenue: 108000 },
];

function RevenueChart() {
  return (
    <div className="admin-chart-card">

      <div className="chart-header">

        <div>
          <h3>Revenue Analytics</h3>
          <p>Platform earnings this year</p>
        </div>

        <button className="chart-button">
          This Year
        </button>

      </div>

      <ResponsiveContainer width="100%" height={380}>

        <AreaChart data={data}>

          <defs>

            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">

              <stop offset="5%" stopColor="#ff4d8d" stopOpacity={0.8} />

              <stop offset="95%" stopColor="#ff4d8d" stopOpacity={0} />

            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#2a3144" />

          <XAxis dataKey="month" stroke="#9ca3af" />

          <YAxis stroke="#9ca3af" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#ff4d8d"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RevenueChart;