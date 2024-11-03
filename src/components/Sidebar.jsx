import {
  BarChart2,
  DollarSign,
  GithubIcon,
  LinkedinIcon,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3B82F6",
    href: "/analystics",
  },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

function Sidebar() {
  const [isSidebarOpen, setIssidebarOpen] = useState(true);

  // Close the sidebar on smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIssidebarOpen(false);
      } else {
        setIssidebarOpen(true);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md flex flex-col p-4 border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          onClick={() => setIssidebarOpen(!isSidebarOpen)}
          className="rounded-full p-2 hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg mb-2 hover:bg-gray-700 transition-colors">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap text-white"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ delay: 0.3, duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
        <div
          className={`mt-auto flex justify-between ${
            !isSidebarOpen ? "flex-col" : ""
          }`}
        >
          <a
            href=" https://www.linkedin.com/in/esmael-sabir/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-200"
          >
            <LinkedinIcon className="text-white w-6 h-8 sm:w-8 sm:h-6" />
          </a>
          <a
            href="https://github.com/Esam-jr "
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-200"
            style={{ color: "#ffffff" }}
          >
            <GithubIcon className="text-white w-8 h-8 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
