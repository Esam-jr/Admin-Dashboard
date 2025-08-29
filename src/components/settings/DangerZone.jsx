import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

function DangerZone() {
  return (
    <motion.div
      className="bg-accent-danger/10 shadow-lg rounded-xl p-6 border border-accent-danger/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <AlertTriangle className="text-accent-danger mr-3" size={24} />
        <h2 className="text-xl font-semibold text-text-primary">Danger Zone</h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
            <h3 className="font-semibold text-text-primary">Delete Your Account</h3>
            <p className="text-text-secondary text-sm mt-1">
                Permanently delete your account and all of your content. This action is not reversible.
            </p>
        </div>
        <button className="bg-accent-danger hover:bg-accent-danger/80 text-white font-bold py-2 px-6 rounded-lg transition duration-200 w-full sm:w-auto flex-shrink-0">
            Delete Account
        </button>
      </div>
    </motion.div>
  );
}

export default DangerZone;
