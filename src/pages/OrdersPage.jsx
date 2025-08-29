import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};
function OrdersPage() {
  return (
    <div className=" flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl py-6 px-4 lg:px-8">
        {/*SALES stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStats.totalOrders}
            color="hsl(var(--accent-purple))"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={orderStats.pendingOrders}
            color="hsl(var(--accent-warning))"
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            value={orderStats.completedOrders}
            color="hsl(var(--accent-secondary))"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="hsl(var(--accent-danger))"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-8">
          <DailyOrders />
          <OrderDistribution />
        </div>
        <OrdersTable />
      </main>
    </div>
  );
}

export default OrdersPage;
