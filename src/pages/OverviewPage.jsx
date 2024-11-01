import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/OVerview/SalesOverviewChart";
import CatagoryDistrubutionChart from "../components/OVerview/CatagoryDistrubutionChart";
import SalesChannelChart from "../components/OVerview/SalesChannelChart";
function OverviewPage() {
  return (
    <div className=" flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl py-6 px-4 lg:px-8">
        {/* stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,480"
            color="#6366F1"
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="$1,280"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="$580"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rates"
            icon={BarChart2}
            value="12.67%"
            color="#10B981"
          />
        </motion.div>
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CatagoryDistrubutionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default OverviewPage;
