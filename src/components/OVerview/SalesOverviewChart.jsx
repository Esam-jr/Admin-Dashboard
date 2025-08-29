import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const salesData = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 5100 },
  { name: "Oct", sales: 4600 },
  { name: "Nov", sales: 5400 },
  { name: "Dec", sales: 7200 },
  { name: "Jan", sales: 6100 },
  { name: "Feb", sales: 5900 },
  { name: "Mar", sales: 6800 },
  { name: "Apr", sales: 6300 },
  { name: "May", sales: 7100 },
  { name: "Jun", sales: 7500 },
];
function SalesOverviewChart() {
  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-lg font-semibold mb-4 text-text-primary">Sales Overview</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border-primary))" />
            <XAxis dataKey="name" stroke="hsl(var(--text-secondary))" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="hsl(var(--text-secondary))" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--surface-secondary))",
                borderColor: "hsl(var(--border-primary))",
                color: "hsl(var(--text-primary))"
              }}
            />
            <Legend wrapperStyle={{fontSize: "14px", color: "hsl(var(--text-secondary))"}} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="hsl(var(--accent-primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--accent-primary))", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverviewChart;
