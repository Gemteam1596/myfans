import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./Dashboard.css";

const data = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1800 },
  { month: "Mar", earnings: 2600 },
  { month: "Apr", earnings: 2400 },
  { month: "May", earnings: 3400 },
  { month: "Jun", earnings: 4200 },
  { month: "Jul", earnings: 5100 },
];

function EarningsChart() {
  return (
    <div className="chart-card">

      <div className="chart-header">

        <div>

          <h3>Earnings Overview</h3>

          <p>Your monthly earnings performance</p>

        </div>

        <button className="chart-btn">
          Last 6 Months
        </button>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <AreaChart data={data}>

          <defs>

            <linearGradient
              id="earnings"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#ff3f86"
                stopOpacity={0.9}
              />

              <stop
                offset="95%"
                stopColor="#ff3f86"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid
            strokeDasharray="4 4"
            stroke="#26293d"
          />

          <XAxis
            dataKey="month"
            stroke="#8f95b2"
          />

          <YAxis
            stroke="#8f95b2"
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#ff3f86"
            strokeWidth={4}
            fill="url(#earnings)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default EarningsChart;