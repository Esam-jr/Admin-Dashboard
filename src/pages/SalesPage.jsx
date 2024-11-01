import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../common/Header";
import StatCard from "../common/StatCard";
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
    <div className=" flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />
      <main className="max-w-7xl py-6 px-4 lg:px-8">
        {/*SALES stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366F1"
          />
          <StatCard
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#10B981"
          />
          <StatCard
            name="Conversion Rate"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#F59E0B"
          />
          <StatCard
            name="Sales Growth"
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#EF4444"
          />
        </motion.div>
        <SalesoverviewAreaChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-8">
          <SalesByCatagoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
}

export default SalesPage;
