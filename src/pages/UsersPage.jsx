import { motion } from "framer-motion";
import { UserPlus, UserCheck, UserX, UsersIcon } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/userGrowthChart";
import UserDemographicsChart from "../components/users/UserDemographicsChart";
import UserActivityHeatMap from "../components/users/UserActivityHeatMap";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};
function UsersPage() {
  return (
    <div className=" flex-1 overflow-auto relative z-10">
      <Header title="Users Page" />
      <main className="max-w-7xl py-6 px-4 lg:px-8">
        {/* stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>
        <UsersTable />
        {/* User */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <UserGrowthChart />
          <UserActivityHeatMap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
}

export default UsersPage;
