const ToggleSwitch = ({ label, isOn, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-text-primary">{label}</span>
      <button
        className={`
        relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary focus:ring-accent-primary
        ${isOn ? "bg-accent-primary" : "bg-surface-secondary"}
        `}
        onClick={onToggle}
      >
        <span
          className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full 
            ${isOn ? "translate-x-6" : "translate-x-1"}
            `}
        />
      </button>
    </div>
  );
};
export default ToggleSwitch;
