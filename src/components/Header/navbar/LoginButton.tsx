import { useNavigate } from "react-router-dom";
import { useLanguageStore } from "../../../zustand/store";
const translations = {
  tr: {
    login: "Giris",
  },
  de: {
    login: "Anmelden",
  },
};

function LoginButton() {
  const { language } = useLanguageStore();

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };
  return (
    <div>
      {" "}
      <button
        onClick={handleLoginRedirect}
        className="hover:bg-blue-700 transition duration-300 ease-in-out rounded-full px-3 py-1"
      >
        {translations[language].login}
      </button>
    </div>
  );
}

export default LoginButton;
