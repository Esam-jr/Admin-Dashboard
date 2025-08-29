import { motion } from "framer-motion";

const SettingSection = ({ icon: Icon, title, children }) => {
  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6 pb-4 border-b border-border-primary">
        <Icon className="text-accent-primary mr-4" size={24} />
        <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
};
export default SettingSection;
