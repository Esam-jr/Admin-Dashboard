import { Package, TrendingUp, AlertTriangle, DollarSign, Edit, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import CatagoryDistrubutionChart from "../components/OVerview/CatagoryDistrubutionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import DataTable from "../components/common/DataTable";

const PRODUCT_DATA = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
  { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
  { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
  { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
  { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
  { id: 6, name: "Running Shoes", category: "Fitness", price: 89.99, stock: 120, sales: 1100 },
  { id: 7, name: "Bluetooth Speaker", category: "Electronics", price: 45.50, stock: 95, sales: 980 },
  { id: 8, name: "Backpack", category: "Accessories", price: 49.99, stock: 150, sales: 850 },
];

const columns = [
    {
        key: 'name',
        header: 'Name',
        sortable: true,
        render: (item) => (
            <div className="flex items-center gap-3">
                <img
                    src={`https://source.unsplash.com/40x40/?${item.category},product`}
                    alt={item.name}
                    className="w-10 h-10 rounded-md object-cover"
                />
                <span className="font-medium text-text-primary">{item.name}</span>
            </div>
        )
    },
    { key: 'category', header: 'Category', sortable: true, render: (item) => <span className="text-text-secondary">{item.category}</span> },
    { key: 'price', header: 'Price', sortable: true, render: (item) => <span className="text-text-secondary">${item.price.toFixed(2)}</span> },
    { key: 'stock', header: 'Stock', sortable: true, render: (item) => <span className={`font-medium ${item.stock < 100 ? 'text-accent-warning' : 'text-text-secondary'}`}>{item.stock}</span> },
    { key: 'sales', header: 'Sales', sortable: true, render: (item) => <span className="text-text-secondary">{item.sales}</span> },
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

function ProductsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatCard name="Total Products" icon={Package} value="1,480" color="hsl(var(--accent-primary))" />
        <StatCard name="Top Selling" icon={TrendingUp} value="89" color="hsl(var(--accent-secondary))" />
        <StatCard name="Low Stock" icon={AlertTriangle} value="23" color="hsl(var(--accent-warning))" />
        <StatCard name="Total Revenue" icon={DollarSign} value="$549,045" color="hsl(var(--accent-pink))" />
      </motion.div>

      <DataTable 
        data={PRODUCT_DATA} 
        columns={columns}
        filterableColumns={[{ key: 'category', label: 'Category' }]}
        searchableColumns={['name', 'category']}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesTrendChart />
        <CatagoryDistrubutionChart />
      </div>
    </div>
  );
}

export default ProductsPage;
