const SkeletonLoader = ({ className }) => {
    return (
        <div className={`relative overflow-hidden bg-surface-secondary rounded-md ${className}`}>
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-border-primary to-transparent" />
        </div>
    );
};

export default SkeletonLoader;
