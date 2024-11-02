import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

function Security() {
  const [SecurityAuth, setSecurityAuth] = useState(false);
  return (
    <SettingSection icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two-factore Authenthication"}
        isOn={SecurityAuth}
        onToggle={() => setSecurityAuth(!SecurityAuth)}
      />
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
}

export default Security;
