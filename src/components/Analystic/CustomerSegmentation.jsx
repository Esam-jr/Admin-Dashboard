import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
} from "recharts";

const customerSegmentationData = [
  { subject: "Engagement", A: 120, B: 110, fullMark: 150 },
  { subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
  { subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
  { subject: "Spend", A: 99, B: 100, fullMark: 150 },
  { subject: "Frequency", A: 85, B: 90, fullMark: 150 },
  { subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const CustomerSegmentation = () => {
  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-xl font-semibold text-text-primary mb-4">
        Customer Segmentation
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={customerSegmentationData}
          >
            <PolarGrid stroke="hsl(var(--border-primary))" />
            <PolarAngleAxis dataKey="subject" stroke="hsl(var(--text-secondary))" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="hsl(var(--text-secondary))" />
            <Radar
              name="Segment A"
              dataKey="A"
              stroke="hsl(var(--accent-purple))"
              fill="hsl(var(--accent-purple))"
              fillOpacity={0.6}
            />
            <Radar
              name="Segment B"
              dataKey="B"
              stroke="hsl(var(--accent-secondary))"
              fill="hsl(var(--accent-secondary))"
              fillOpacity={0.6}
            />
            <Legend wrapperStyle={{color: "hsl(var(--text-secondary))"}}/>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--surface-secondary))",
                borderColor: "hsl(var(--border-primary))",
                color: "hsl(var(--text-primary))"
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default CustomerSegmentation;
