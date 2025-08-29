import { Package, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import ProductsTable from "../components/products/ProductsTable";
import CatagoryDistrubutionChart from "../components/OVerview/CatagoryDistrubutionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";

function ProductsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StatCard
          name="Total Products"
          icon={Package}
          value="1,480"
          color="hsl(var(--accent-primary))"
        />
        <StatCard
          name="Top Selling"
          icon={TrendingUp}
          value="89"
          color="hsl(var(--accent-secondary))"
        />
        <StatCard
          name="Low Stock"
          icon={AlertTriangle}
          value="23"
          color="hsl(var(--accent-warning))"
        />
        <StatCard
          name="Total Revenue"
          icon={DollarSign}
          value="$549,045"
          color="hsl(var(--accent-pink))"
        />
      </motion.div>

      <ProductsTable />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesTrendChart />
        <CatagoryDistrubutionChart />
      </div>
    </div>
  );
}

export default ProductsPage;
