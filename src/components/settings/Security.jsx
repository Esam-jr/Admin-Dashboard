import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

function Security() {
  const [securityAuth, setSecurityAuth] = useState(false);
  return (
    <SettingSection icon={Lock} title="Security">
      <ToggleSwitch
        label="Two-Factor Authentication"
        isOn={securityAuth}
        onToggle={() => setSecurityAuth(!securityAuth)}
      />
      <div className="pt-4 border-t border-border-primary flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary">Change your password</p>
        <button className="bg-surface-secondary hover:bg-border-primary text-text-primary font-bold py-2 px-6 rounded-lg transition duration-200 w-full sm:w-auto">
          Change Password
        </button>
      </div>
    </SettingSection>
  );
}

export default Security;
