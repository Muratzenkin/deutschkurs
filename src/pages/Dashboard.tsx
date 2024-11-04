import { useEffect } from "react";
import { useUserStore } from "../zustand/store";
import { useNavigate } from "react-router-dom";
import Homework from "../components/Account/Homework";

const Dashboard = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const loadUserFromLocalStorage = useUserStore(
    (state) => state.loadUserFromLocalStorage
  );
  const navigate = useNavigate();

  useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Willkommen, {user?.name}!
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Abmelden
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded shadow-md p-8">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Hier können Sie Ihre Kursinformationen und Aufgaben verfolgen.
          </p>
          {user && (
            <div className="mb-6">
              <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Informationen für Studenten
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Fortschritt: 75
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Erledigte Aufgaben: 15/20
                </p>
              </div>
            </div>
          )}

          <Homework />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
