import { useState, useEffect } from "react";
import { useUserStore, useThemeStore } from "../zustand/store";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";

const Login = () => {
  const { theme } = useThemeStore();
  const { isAuthenticated, loadUserFromLocalStorage, login } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      alert("Erfolgreicher Einstieg!");
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <form
        onSubmit={handleLogin}
        className={`p-8 rounded shadow-md max-w-md w-full ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Anmeldung</h2>
        <div className="mb-4">
          <label
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            E-Mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded mt-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            placeholder="E-Mail"
            required
          />
        </div>
        <div className="mb-6 flex items-center">
          <label
            className={`${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Passwort
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`flex-1 p-2 border border-gray-300 rounded mt-2  ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            placeholder="********"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`p-2 mt-2 ${
              theme === "dark"
                ? "text-gray-200 bg-gray-500"
                : "text-gray-700 bg-gray-200"
            } rounded hover:bg-gray-300 transition ml-2`}
          >
            <Eye />
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Anmelden
        </button>
        <button
          type="button"
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-600 transition mt-2"
          onClick={handleRegister}
        >
          Registrierung
        </button>
      </form>
    </div>
  );
};

export default Login;
