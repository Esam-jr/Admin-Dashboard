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
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h1>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverviewChart;