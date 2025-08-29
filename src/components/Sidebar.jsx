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
  Hexagon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const SIDEBAR_ITEMS = [
  { name: "Overview", icon: BarChart2, href: "/" },
  { name: "Products", icon: ShoppingBag, href: "/products" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Sales", icon: DollarSign, href: "/sales" },
  { name: "Orders", icon: ShoppingCart, href: "/orders" },
  { name: "Analytics", icon: TrendingUp, href: "/analystics" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

function Sidebar() {
  const [isSidebarOpen, setIssidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIssidebarOpen(false);
      } else {
        setIssidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="relative z-20 flex-shrink-0"
      animate={{ width: isSidebarOpen ? 256 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="h-full bg-surface-primary flex flex-col p-4 border-r border-border-primary">
        <div className={cn("flex items-center", isSidebarOpen ? "justify-between" : "justify-center")}>
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Hexagon className="text-accent-primary" size={28} />
                <span className="text-xl font-bold text-text-primary">Stellar</span>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIssidebarOpen(!isSidebarOpen)}
            className="rounded-full p-2 hover:bg-surface-secondary transition-colors"
          >
            <Menu size={24} />
          </motion.button>
        </div>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link key={item.href} to={item.href}>
                <motion.div
                  className={cn(
                    "flex items-center p-3 text-sm font-medium rounded-lg mb-2 transition-colors relative",
                    isActive
                      ? "bg-accent-primary/20 text-accent-primary"
                      : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary"
                  )}
                  whileHover={{ x: isActive ? 0 : 4 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-accent-primary rounded-r-full"
                    />
                  )}
                  <item.icon size={20} className="flex-shrink-0" />
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.span
                        className="ml-4 whitespace-nowrap"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col items-center gap-2">
           <div className={cn("flex w-full", isSidebarOpen ? "justify-start gap-4" : "justify-center flex-col gap-2")}>
             <a
              href="https://www.linkedin.com/in/esmael-sabir/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent-primary hover:bg-surface-secondary rounded-lg transition-all duration-200"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://github.com/Esam-jr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-accent-primary hover:bg-surface-secondary rounded-lg transition-all duration-200"
            >
              <GithubIcon size={20} />
            </a>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
