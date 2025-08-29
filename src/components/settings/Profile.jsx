import { User } from "lucide-react";
import SettingSection from "./SettingSection";

function Profile() {
  return (
    <SettingSection icon={User} title="Profile">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          alt="Profile"
          className="rounded-full w-24 h-24 object-cover border-4 border-border-primary"
          src="/profile.jpeg"
        />
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-semibold text-text-primary">Esamel Sabir</h3>
          <p className="text-text-secondary">esmaelsabir9@gmail.com</p>
          <p className="text-sm text-text-secondary mt-1">Joined on July 20, 2024</p>
        </div>
        <button className="bg-accent-primary hover:bg-accent-primary/80 text-white font-bold py-2 px-6 rounded-lg transition duration-200 w-full sm:w-auto">
          Edit Profile
        </button>
      </div>
    </SettingSection>
  );
}

export default Profile;
