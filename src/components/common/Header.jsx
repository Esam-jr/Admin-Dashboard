import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="flex-shrink-0 bg-surface-primary/80 backdrop-blur-sm border-b border-border-primary shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-surface-secondary border border-transparent w-64 rounded-lg pl-10 pr-4 py-2 text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent"
          />
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-2 rounded-full text-text-secondary hover:bg-surface-secondary hover:text-text-primary transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-accent-danger ring-2 ring-surface-primary" />
          </motion.button>

          <div className="w-px h-6 bg-border-primary" />

          <div className="flex items-center gap-3">
            <img
              src="/profile.jpeg"
              alt="User profile"
              className="w-9 h-9 rounded-full object-cover border-2 border-border-primary"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-text-primary">Esamel Sabir</p>
              <p className="text-xs text-text-secondary">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
