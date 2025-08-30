import { motion } from 'framer-motion';
import { ShoppingCart, UserPlus, TrendingUp } from 'lucide-react';

const notifications = [
    { id: 1, icon: ShoppingCart, text: 'New order #ORD009 received from Grace Taylor.', time: '5m ago', color: 'text-accent-primary' },
    { id: 2, icon: UserPlus, text: 'A new user "Kevin Lee" has registered.', time: '1h ago', color: 'text-accent-secondary' },
    { id: 3, icon: TrendingUp, text: 'Your weekly sales report is ready to view.', time: '3h ago', color: 'text-accent-purple' },
    { id: 4, icon: ShoppingCart, text: 'Order #ORD008 has been delivered.', time: 'yesterday', color: 'text-accent-primary' },
];

const NotificationsPanel = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 bg-surface-primary rounded-xl shadow-2xl border border-border-primary z-30"
        >
            <div className="p-4 border-b border-border-primary">
                <h3 className="font-semibold text-text-primary">Notifications</h3>
            </div>
            <div className="py-2 max-h-96 overflow-y-auto">
                {notifications.map(notification => (
                    <div key={notification.id} className="flex items-start gap-4 px-4 py-3 hover:bg-surface-secondary transition-colors">
                        <div className={`mt-1 flex-shrink-0 ${notification.color}`}>
                            <notification.icon size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-text-primary">{notification.text}</p>
                            <p className="text-xs text-text-secondary mt-1">{notification.time}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-2 border-t border-border-primary text-center">
                <button className="text-sm font-medium text-accent-primary hover:underline">
                    View all notifications
                </button>
            </div>
        </motion.div>
    );
};

export default NotificationsPanel;
