import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4000, target: 3800 },
  { month: "Feb", revenue: 3000, target: 3200 },
  { month: "Mar", revenue: 5000, target: 4500 },
  { month: "Apr", revenue: 4500, target: 4200 },
  { month: "May", revenue: 6000, target: 5500 },
  { month: "Jun", revenue: 5500, target: 5800 },
  { month: "Jul", revenue: 7000, target: 6500 },
];
function RevenueChart() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("This month");
  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-text-primary">
          Revenue vs Target
        </h2>
        <select
          className="bg-surface-secondary text-text-primary rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-accent-primary"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border-primary))" />
            <XAxis dataKey="month" stroke="hsl(var(--text-secondary))" />
            <YAxis stroke="hsl(var(--text-secondary))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--surface-secondary))",
                borderColor: "hsl(var(--border-primary))",
                color: "hsl(var(--text-primary))"
              }}
            />
            <Legend wrapperStyle={{color: "hsl(var(--text-secondary))"}}/>
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--accent-purple))"
              fill="hsl(var(--accent-purple))"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="hsl(var(--accent-secondary))"
              fill="hsl(var(--accent-secondary))"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default RevenueChart;
