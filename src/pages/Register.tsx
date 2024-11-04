import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore, useThemeStore } from "../zustand/store";

const Register = () => {
  const { theme } = useThemeStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = useUserStore((state) => state.register);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    register(name, email, password);
    alert("Ihre Registrierung ist abgeschlossen, Sie können sich anmelden.");
    navigate("/login");
  };

  return (
    <div
      className={`pt-[80px] min-h-screen flex items-center justify-center bg-gray-100 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <form
        onSubmit={handleRegister}
        className={`p-8 rounded shadow-md max-w-md w-full ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Registrierung</h2>
        <div className="mb-4">
          <label
            className={`block ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            } `}
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded mt-2  ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            placeholder="Max"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className={`block ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            } `}
          >
            E-Mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded mt-2  ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            placeholder="max@gmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className={`block ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            } `}
          >
            Passwort
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded mt-2  ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            placeholder="max123"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Registrieren
        </button>
      </form>
    </div>
  );
};

export default Register;
