import Header from "../common/Header";
import { motion } from "framer-motion";
import StatCard from "../common/StatCard";
import { Package, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import ProductsTable from "../products/ProductsTable";
import CatagoryDistrubutionChart from "../OVerview/CatagoryDistrubutionChart";
import SalesTrendChart from "../products/SalesTrendChart";
function ProductsPage() {
  return (
    <div className=" flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-7xl py-6 px-4 lg:px-8">
        {/* stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value="1,480"
            color="#6366F1"
          />
          <StatCard
            name="Top Sellings"
            icon={TrendingUp}
            value="89"
            color="#8B5CF6"
          />
          <StatCard
            name="Low Stock"
            icon={AlertTriangle}
            value="23"
            color="#EC4899"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value="$549,045"
            color="#10B981"
          />
        </motion.div>

        <ProductsTable />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CatagoryDistrubutionChart />
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;
