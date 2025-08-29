import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];

const ProductPerformance = () => {
	return (
		<motion.div
			className='bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-text-primary mb-4'>Product Performance</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={productPerformanceData}>
						<CartesianGrid strokeDasharray='3 3' stroke='hsl(var(--border-primary))' />
						<XAxis dataKey='name' stroke='hsl(var(--text-secondary))' />
						<YAxis stroke='hsl(var(--text-secondary))' />
						<Tooltip
							contentStyle={{
								backgroundColor: "hsl(var(--surface-secondary))",
								borderColor: "hsl(var(--border-primary))",
                color: "hsl(var(--text-primary))"
							}}
						/>
						<Legend wrapperStyle={{color: "hsl(var(--text-secondary))"}}/>
						<Bar dataKey='sales' fill='hsl(var(--accent-purple))' />
						<Bar dataKey='revenue' fill='hsl(var(--accent-secondary))' />
						<Bar dataKey='profit' fill='hsl(var(--accent-warning))' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default ProductPerformance;
