import { useState } from "react";
import SettingSection from "./SettingSection";
import { Link, Plus } from "lucide-react";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    { id: 1, name: "Google", connected: true, icon: "/google.png" },
    { id: 2, name: "Facebook", connected: false, icon: "/facebook.svg" },
    { id: 3, name: "Twitter", connected: true, icon: "/x.png" },
  ]);

  const toggleConnection = (id) => {
    setConnectedAccounts(
      connectedAccounts.map((acc) =>
        acc.id === id ? { ...acc, connected: !acc.connected } : acc
      )
    );
  };

  return (
    <SettingSection icon={Link} title="Connected Accounts">
      {connectedAccounts.map((account) => (
        <div key={account.id} className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <img src={account.icon} alt={account.name} className="w-6 h-6 object-contain" />
            <span className="text-text-primary">{account.name}</span>
          </div>
          <button
            className={`px-4 py-1 text-sm font-semibold rounded-md transition duration-200 ${
              account.connected
                ? "bg-accent-secondary/20 text-accent-secondary hover:bg-accent-secondary/30"
                : "bg-surface-secondary hover:bg-border-primary text-text-primary"
            }`}
            onClick={() => toggleConnection(account.id)}
          >
            {account.connected ? "Disconnect" : "Connect"}
          </button>
        </div>
      ))}
      <div className="pt-4 border-t border-border-primary">
        <button className="mt-2 flex items-center text-accent-primary hover:text-accent-primary/80 transition duration-200">
          <Plus size={18} className="mr-2" /> Add Account
        </button>
      </div>
    </SettingSection>
  );
};
export default ConnectedAccounts;
