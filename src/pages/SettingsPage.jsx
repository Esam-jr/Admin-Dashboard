import Profile from "../components/settings/Profile";
import Notifications from "../components/settings/Notifications";
import Security from "../components/settings/Security";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-text-primary">Settings</h1>
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
    </div>
  );
};
export default SettingsPage;
