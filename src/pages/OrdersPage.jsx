import { CheckCircle, Clock, DollarSign, ShoppingBag, Eye } from "lucide-react";
import { motion } from "framer-motion";

import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import DataTable from "../components/common/DataTable";

const orderData = [
  { id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2023-07-01" },
  { id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2023-07-02" },
  { id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2023-07-03" },
  { id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2023-07-04" },
  { id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2023-07-05" },
  { id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2023-07-06" },
  { id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2023-07-07" },
  { id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2023-07-08" },
];

const getStatusClasses = (status) => {
    switch (status) {
      case "Delivered": return "bg-accent-secondary/10 text-accent-secondary";
      case "Processing": return "bg-accent-primary/10 text-accent-primary";
      case "Shipped": return "bg-accent-purple/10 text-accent-purple";
      case "Pending": return "bg-accent-warning/10 text-accent-warning";
      default: return "bg-surface-secondary text-text-secondary";
    }
};

const columns = [
    { key: 'id', header: 'Order ID', sortable: true, render: (item) => <span className="font-medium text-accent-primary">{item.id}</span> },
    { key: 'customer', header: 'Customer', sortable: true, render: (item) => <span className="text-text-primary">{item.customer}</span> },
    { key: 'total', header: 'Total', sortable: true, render: (item) => <span className="text-text-primary">${item.total.toFixed(2)}</span> },
    { key: 'status', header: 'Status', sortable: true, render: (item) => <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(item.status)}`}>{item.status}</span> },
    { key: 'date', header: 'Date', sortable: true, render: (item) => <span className="text-text-secondary">{item.date}</span> },
    {
        key: 'actions',
        header: 'Actions',
        render: () => (
            <button className="text-accent-primary hover:text-accent-primary/80 p-1 rounded-md hover:bg-accent-primary/10"><Eye size={18} /></button>
        )
    }
];

const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

function OrdersPage() {
  return (
    <div className="space-y-8">
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatCard name="Total Orders" icon={ShoppingBag} value={orderStats.totalOrders} color="hsl(var(--accent-purple))" />
        <StatCard name="Pending Orders" icon={Clock} value={orderStats.pendingOrders} color="hsl(var(--accent-warning))" />
        <StatCard name="Completed Orders" icon={CheckCircle} value={orderStats.completedOrders} color="hsl(var(--accent-secondary))" />
        <StatCard name="Total Revenue" icon={DollarSign} value={orderStats.totalRevenue} color="hsl(var(--accent-danger))" />
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DailyOrders />
        <OrderDistribution />
      </div>

      <DataTable
        data={orderData}
        columns={columns}
        filterableColumns={[{ key: 'status', label: 'Status' }]}
        searchableColumns={['id', 'customer']}
      />
    </div>
  );
}

export default OrdersPage;
