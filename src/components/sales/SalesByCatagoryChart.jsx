import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const salesByCategory = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home & Garden", value: 200 },
  { name: "Books", value: 100 },
  { name: "Others", value: 150 },
];

const COLORS = [
  "hsl(var(--accent-primary))",
  "hsl(var(--accent-secondary))",
  "hsl(var(--accent-warning))",
  "hsl(var(--accent-danger))",
  "hsl(var(--accent-purple))",
];

function SalesByCatagoryChart() {
  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-lg font-medium mb-4 text-text-primary">
        Sales By Catagory
      </h1>
      <div className="h-80 rounded-lg p-4">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={salesByCategory}
              cx="50%"
              cy="50%"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {salesByCategory.map((entry, index) => (
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

export default SalesByCatagoryChart;
