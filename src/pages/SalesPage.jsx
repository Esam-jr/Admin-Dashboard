import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import StatCard from "../components/common/StatCard";
import SalesoverviewAreaChart from "../components/sales/SalesoverviewAreaChart";
import SalesByCatagoryChart from "../components/sales/SalesByCatagoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};
function SalesPage() {
  return (
    <div className="space-y-8">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatCard name="Total Revenue" icon={DollarSign} value={salesStats.totalRevenue} color="hsl(var(--accent-purple))" />
        <StatCard name="Avg. Order Value" icon={ShoppingCart} value={salesStats.averageOrderValue} color="hsl(var(--accent-secondary))" />
        <StatCard name="Conversion Rate" icon={TrendingUp} value={salesStats.conversionRate} color="hsl(var(--accent-warning))" />
        <StatCard name="Sales Growth" icon={CreditCard} value={salesStats.salesGrowth} color="hsl(var(--accent-danger))" />
      </motion.div>
      <SalesoverviewAreaChart />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SalesByCatagoryChart />
        <DailySalesTrend />
      </div>
    </div>
  );
}

export default SalesPage;
