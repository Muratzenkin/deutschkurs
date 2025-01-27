import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Willkommen() {
  const navigate = useNavigate();
  const courseSectionRef = useRef(null);

  const handleRegister = () => {
    navigate("/login");
  };

  const words = [
    "Hallo",
    "Danke",
    "Bitte",
    "Tschüss",
    "Guten Morgen",
    "Ja",
    "Nein",
    "Entschuldigung",
    "Wasser",
    "Hilfe",
  ];

  return (
    <div className="relative flex flex-col items-center w-full h-screen bg-[#E0F2F1]">
      <motion.img
        src="/image/deutschh.avif"
        alt="willkommen"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Online Deutsch Kurs!
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="text-xl md:text-2xl font-semibold text-[#FFECB3] px-2 py-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 0],
                y: [20, 0, -20],
              }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <button
          className="mt-6 bg-[#FFECB3] text-[#1E88E5] font-semibold py-2 px-6 rounded-full shadow hover:bg-[#FFF59D] transition duration-300 ease-in-out"
          onClick={handleRegister}
        >
          Anmelden
        </button>
      </div>

      <div
        ref={courseSectionRef}
        className="pt-[80px] mt-12 bg-[#E0F2F1] p-6"
      ></div>
    </div>
  );
}

export default Willkommen;
