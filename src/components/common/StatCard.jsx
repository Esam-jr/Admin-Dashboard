import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

function StatCard({ name, icon: Icon, value, color, change }) {
  const ChangeIcon = change ? (change.value > 0 ? '▲' : '▼') : '';
  const changeColor = change ? (change.value > 0 ? 'text-accent-secondary' : 'text-accent-danger') : '';

  return (
    <motion.div
      className="bg-surface-primary p-5 rounded-xl border border-border-primary flex flex-col justify-between"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-text-secondary">{name}</p>
        <div className="p-2 rounded-lg bg-surface-secondary">
          <Icon size={20} style={{ color }} />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-text-primary">{value}</p>
        {change && (
          <div className="flex items-center text-sm mt-1">
            <span className={cn("font-semibold", changeColor)}>
              {ChangeIcon} {Math.abs(change.value)}%
            </span>
            <span className="ml-2 text-text-secondary">{change.period}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default StatCard;
