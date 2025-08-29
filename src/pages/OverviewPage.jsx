import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/OVerview/SalesOverviewChart";
import CatagoryDistrubutionChart from "../components/OVerview/CatagoryDistrubutionChart";
import SalesChannelChart from "../components/OVerview/SalesChannelChart";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

function OverviewPage() {
  return (
    <div className="space-y-6">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,480"
            color="hsl(var(--accent-primary))"
            change={{ value: 12.5, period: "vs last month" }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            name="New Users"
            icon={Users}
            value="1,280"
            color="hsl(var(--accent-purple))"
            change={{ value: 8.3, period: "vs last month" }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="580"
            color="hsl(var(--accent-pink))"
            change={{ value: -2.1, period: "vs last month" }}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.67%"
            color="hsl(var(--accent-secondary))"
            change={{ value: 5.4, period: "vs last month" }}
          />
        </motion.div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <SalesOverviewChart />
        </div>
        <CatagoryDistrubutionChart />
      </div>
      <SalesChannelChart />
    </div>
  );
}

export default OverviewPage;
