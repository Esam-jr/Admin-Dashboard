import { motion } from "framer-motion";
import { UserPlus, UserCheck, UserX, UsersIcon, Edit, Trash2 } from "lucide-react";

import StatCard from "../components/common/StatCard";
import UserGrowthChart from "../components/users/userGrowthChart";
import UserDemographicsChart from "../components/users/UserDemographicsChart";
import UserActivityHeatMap from "../components/users/UserActivityHeatMap";
import DataTable from "../components/common/DataTable";

const userData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
  { id: 6, name: "Diana Prince", email: "diana@example.com", role: "Customer", status: "Inactive" },
  { id: 7, name: "Bruce Wayne", email: "bruce@example.com", role: "Admin", status: "Active" },
  { id: 8, name: "Clark Kent", email: "clark@example.com", role: "Moderator", status: "Active" },
];

const getStatusClasses = (status) => {
    switch (status) {
      case "Active": return "bg-accent-secondary/10 text-accent-secondary";
      case "Inactive": return "bg-accent-danger/10 text-accent-danger";
      default: return "bg-surface-secondary text-text-secondary";
    }
};

const getRoleClasses = (role) => {
    switch (role) {
      case "Admin": return "bg-accent-purple/10 text-accent-purple";
      case "Moderator": return "bg-accent-primary/10 text-accent-primary";
      default: return "bg-surface-secondary text-text-secondary";
    }
};

const columns = [
    {
        key: 'name',
        header: 'Name',
        sortable: true,
        render: (item) => (
            <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/40?u=${item.email}`} alt={item.name} className="w-10 h-10 rounded-full" />
                <span className="font-medium text-text-primary">{item.name}</span>
            </div>
        )
    },
    { key: 'email', header: 'Email', sortable: true, render: (item) => <span className="text-text-secondary">{item.email}</span> },
    { key: 'role', header: 'Role', sortable: true, render: (item) => <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleClasses(item.role)}`}>{item.role}</span> },
    { key: 'status', header: 'Status', sortable: true, render: (item) => <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(item.status)}`}>{item.status}</span> },
    {
        key: 'actions',
        header: 'Actions',
        render: () => (
            <div className="flex items-center gap-2">
                <button className="text-accent-primary hover:text-accent-primary/80 p-1 rounded-md hover:bg-accent-primary/10"><Edit size={16} /></button>
                <button className="text-accent-danger hover:text-accent-danger/80 p-1 rounded-md hover:bg-accent-danger/10"><Trash2 size={16} /></button>
            </div>
        )
    }
];

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

function UsersPage() {
  return (
    <div className="space-y-6">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatCard name="Total Users" icon={UsersIcon} value={userStats.totalUsers.toLocaleString()} color="hsl(var(--accent-purple))" />
        <StatCard name="New Users Today" icon={UserPlus} value={userStats.newUsersToday} color="hsl(var(--accent-secondary))" />
        <StatCard name="Active Users" icon={UserCheck} value={userStats.activeUsers.toLocaleString()} color="hsl(var(--accent-warning))" />
        <StatCard name="Churn Rate" icon={UserX} value={userStats.churnRate} color="hsl(var(--accent-danger))" />
      </motion.div>
      
      <DataTable
        data={userData}
        columns={columns}
        filterableColumns={[{ key: 'role', label: 'Role' }, { key: 'status', label: 'Status' }]}
        searchableColumns={['name', 'email']}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserGrowthChart />
        <UserActivityHeatMap />
        <UserDemographicsChart />
      </div>
    </div>
  );
}

export default UsersPage;
