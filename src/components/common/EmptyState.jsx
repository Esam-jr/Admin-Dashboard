import { Inbox } from 'lucide-react';

const EmptyState = ({ title = "No data found", message = "There is no data to display at the moment." }) => {
    return (
        <div className="text-center py-16 px-4 bg-surface-secondary rounded-lg border-2 border-dashed border-border-primary">
            <Inbox className="mx-auto h-12 w-12 text-text-secondary" />
            <h3 className="mt-2 text-lg font-semibold text-text-primary">{title}</h3>
            <p className="mt-1 text-sm text-text-secondary">{message}</p>
        </div>
    );
};

export default EmptyState;
