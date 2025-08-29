import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const INSIGHTS = [
  {
    icon: TrendingUp,
    color: "text-accent-secondary",
    insight:
      "Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
  },
  {
    icon: Users,
    color: "text-accent-primary",
    insight:
      "Customer retention has improved by 8% following the launch of the new loyalty program.",
  },
  {
    icon: ShoppingBag,
    color: "text-accent-purple",
    insight:
      'Product category "Electronics" shows the highest growth potential based on recent market trends.',
  },
  {
    icon: DollarSign,
    color: "text-accent-warning",
    insight:
      "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
  },
];

function AIPoweredInsights() {
  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-xl font-semibold text-text-primary mb-4">
        AI Powered Insights
      </h1>
      <div className="space-y-4">
        {INSIGHTS.map((insight, index) => (
          <div key={index} className="flex space-x-3 items-center ">
            <div className={`p-2 rounded-full bg-surface-secondary`}>
              <insight.icon className={`size-6 ${insight.color}`} />
            </div>
            <p className="text-text-secondary">{insight.insight}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default AIPoweredInsights;
