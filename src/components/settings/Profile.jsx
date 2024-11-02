import { User } from "lucide-react";
import SettingSection from "./SettingSection";
function Profile() {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row mb-6 items-center">
        <img
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
          src="/profile.jpeg"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Esamel Sabir</h3>
          <p className="text-gray-400">esmaelsabir9@gmail.com</p>
        </div>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
}

export default Profile;
