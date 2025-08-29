import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

const userActivityData = [
  {
    name: "Mon",
    "0-4": 20,
    "4-8": 40,
    "8-12": 60,
    "12-16": 80,
    "16-20": 100,
    "20-24": 30,
  },
  {
    name: "Tue",
    "0-4": 30,
    "4-8": 50,
    "8-12": 70,
    "12-16": 90,
    "16-20": 110,
    "20-24": 40,
  },
  {
    name: "Wed",
    "0-4": 40,
    "4-8": 60,
    "8-12": 80,
    "12-16": 100,
    "16-20": 120,
    "20-24": 50,
  },
  {
    name: "Thu",
    "0-4": 50,
    "4-8": 70,
    "8-12": 90,
    "12-16": 110,
    "16-20": 130,
    "20-24": 60,
  },
  {
    name: "Fri",
    "0-4": 60,
    "4-8": 80,
    "8-12": 100,
    "12-16": 120,
    "16-20": 140,
    "20-24": 70,
  },
  {
    name: "Sat",
    "0-4": 70,
    "4-8": 90,
    "8-12": 110,
    "12-16": 130,
    "16-20": 150,
    "20-24": 80,
  },
  {
    name: "Sun",
    "0-4": 80,
    "4-8": 100,
    "8-12": 120,
    "12-16": 140,
    "16-20": 160,
    "20-24": 90,
  },
];
function UserActivityHeatMap() {
  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h1 className="text-lg font-medium mb-4 text-text-primary">
        User Activity Heatmap
      </h1>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={userActivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border-primary))" />
            <XAxis dataKey="name" stroke="hsl(var(--text-secondary))" />
            <YAxis stroke="hsl(var(--text-secondary))" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--surface-secondary))",
                borderColor: "hsl(var(--border-primary))",
                color: "hsl(var(--text-primary))"
              }}
            />
            <Legend wrapperStyle={{color: "hsl(var(--text-secondary))"}}/>
            <Bar dataKey="0-4" stackId="a" fill="hsl(var(--accent-primary))" />
            <Bar dataKey="4-8" stackId="a" fill="hsl(var(--accent-purple))" />
            <Bar dataKey="8-12" stackId="a" fill="hsl(var(--accent-pink))" />
            <Bar dataKey="12-16" stackId="a" fill="hsl(var(--accent-secondary))" />
            <Bar dataKey="16-20" stackId="a" fill="hsl(var(--accent-warning))" />
            <Bar dataKey="20-24" stackId="a" fill="hsl(var(--accent-danger))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserActivityHeatMap;
