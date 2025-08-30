import { Bell, Search, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useCommandPalette } from "../../context/CommandPaletteContext";
import { useState } from "react";
import NotificationsPanel from "./NotificationsPanel";
import { useClickOutside } from "../../hooks/useClickOutside";

function Header() {
  const { openPalette } = useCommandPalette();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationsRef = useClickOutside(() => setIsNotificationsOpen(false));

  return (
    <header className="flex-shrink-0 bg-surface-primary/80 backdrop-blur-sm border-b border-border-primary shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <button
          onClick={openPalette}
          className="relative hidden md:flex items-center text-sm text-text-secondary bg-surface-secondary border border-border-primary rounded-lg px-3 py-2 w-64 hover:bg-border-primary/50 transition-colors"
        >
          <Search className="mr-3" size={18} />
          <span>Search...</span>
          <div className="ml-auto flex items-center gap-1">
            <Command size={14} />
            <span className="text-xs">K</span>
          </div>
        </button>

        {/* Right side icons */}
        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />
          <div className="relative" ref={notificationsRef}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsNotificationsOpen(prev => !prev)}
              className="relative p-2 rounded-full text-text-secondary hover:bg-surface-secondary hover:text-text-primary transition-colors"
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-accent-danger ring-2 ring-surface-primary" />
            </motion.button>
            <AnimatePresence>
              {isNotificationsOpen && <NotificationsPanel />}
            </AnimatePresence>
          </div>

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
