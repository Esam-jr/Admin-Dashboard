import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
const PRODUCT_DATA = [
  { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
  { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
  { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
  { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
  { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

function ProductsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold text-text-primary">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Product..."
            className="bg-surface-secondary text-text-primary placeholder-text-secondary pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary w-full sm:w-auto"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border-primary">
          <thead className="bg-surface-secondary">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">Sales</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-primary">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-surface-secondary/50"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary flex items-center gap-3">
                  <img
                    src={`https://source.unsplash.com/40x40/?${product.category},product`}
                    alt={product.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{product.sales}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                  <button className="text-accent-primary hover:text-accent-primary/80 mr-2 p-1 rounded-md hover:bg-accent-primary/10">
                    <Edit size={16} />
                  </button>
                  <button className="text-accent-danger hover:text-accent-danger/80 p-1 rounded-md hover:bg-accent-danger/10">
                    <Trash2 size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ProductsTable;
