import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  ShoppingBag,
  Eye,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

const overviewData = [
  { name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
  { name: "Users", value: "45,678", change: 8.3, icon: Users },
  { name: "Orders", value: "9,876", change: -3.2, icon: ShoppingBag },
  { name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye },
];

function OverviewCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {overviewData.map((item, index) => (
        <motion.div
          key={item.name}
          className="bg-surface-primary shadow-lg p-6 rounded-xl border border-border-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-text-secondary">{item.name}</h3>
              <p className="mt-1 text-xl font-semibold text-text-primary">
                {item.value}
              </p>
            </div>
            <div
              className={`p-3 rounded-full bg-opacity-20 ${
                item.change >= 0 ? "bg-accent-secondary" : "bg-accent-danger"
              }`}
            >
              <item.icon
                className={`size-6 ${
                  item.change >= 0 ? "text-accent-secondary" : "text-accent-danger"
                }`}
              />
            </div>
          </div>
          <div
            className={`mt-4 flex items-center ${
              item.change >= 0 ? "text-accent-secondary" : "text-accent-danger"
            }`}
          >
            {item.change >= 0 ? (
              <ArrowUpRight size="20" />
            ) : (
              <ArrowDownRight size="20" />
            )}
            <span className="ml-1 text-sm font-medium">
              {Math.abs(item.change)}%
            </span>
            <span className="ml-2 text-sm text-text-secondary">vs last period</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default OverviewCards;
