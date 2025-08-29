import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "hsl(var(--accent-primary))",
  "hsl(var(--accent-secondary))",
  "hsl(var(--accent-warning))",
  "hsl(var(--accent-danger))",
  "hsl(var(--accent-purple))",
];

const userDemographicsData = [
  { name: "18-24", value: 20 },
  { name: "25-34", value: 30 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 10 },
];

function UserDemographicsChart() {
  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-lg font-medium mb-4 text-text-primary">
        User Demographics
      </h1>
      <div className="h-80 rounded-lg p-4">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={userDemographicsData}
              cx="50%"
              cy="50%"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {userDemographicsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--surface-secondary))",
                borderColor: "hsl(var(--border-primary))",
                color: "hsl(var(--text-primary))"
              }}
            />
            <Legend wrapperStyle={{color: "hsl(var(--text-secondary))"}}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserDemographicsChart;
