import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Moderator",
    status: "Active",
  },
];
function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterUsers, setFilterdProducts] = useState(userData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
    setFilterdProducts(filtered);
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Active":
        return "bg-accent-secondary/10 text-accent-secondary";
      case "Inactive":
        return "bg-accent-danger/10 text-accent-danger";
      default:
        return "bg-surface-secondary text-text-secondary";
    }
  };

  const getRoleClasses = (role) => {
    switch (role) {
      case "Admin":
        return "bg-accent-purple/10 text-accent-purple";
      case "Moderator":
        return "bg-accent-primary/10 text-accent-primary";
      default:
        return "bg-surface-secondary text-text-secondary";
    }
  };

  return (
    <motion.div
      className="bg-surface-primary shadow-lg rounded-xl p-6 border border-border-primary mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-text-primary">User List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="bg-surface-secondary text-text-primary placeholder-text-secondary pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search
            className="absolute left-3 top-2.5 text-text-secondary "
            size={18}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border-primary">
          <thead className="bg-surface-secondary">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary tracking-wider uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-primary">
            {filterUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-surface-secondary/50"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary flex gap-3 items-center">
                  <img
                    src={`https://i.pravatar.cc/40?u=${user.email}`}
                    alt="users img"
                    className="size-10 rounded-full"
                  />
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                  {user.email}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleClasses(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(user.status)}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                  <button className="text-accent-primary hover:text-accent-primary/80 mr-2 p-1 rounded-md hover:bg-accent-primary/10">
                    <Edit size={16} />
                  </button>
                  <button className="text-accent-danger hover:text-accent-danger/80 p-1 rounded-md hover:bg-accent-danger/10">
                    <Trash2 size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default UsersTable;
