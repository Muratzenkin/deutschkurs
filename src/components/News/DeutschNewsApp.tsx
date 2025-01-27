// src/App.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useNewsStore, useThemeStore } from "../../zustand/store";
import DeutschNews from "./DeutschNews";

const queryClient = new QueryClient();

const DeutschNewsApp: React.FC = () => {
  const setCategory = useNewsStore((state) => state.setCategory);
  const { theme } = useThemeStore();

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`min-h-screen transition-colors duration-300 ease-in-out ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="container mx-auto p-4 mt-16">
          <h1 className="text-2xl font-bold mb-4">News App</h1>

          <select
            onChange={(e) => setCategory(e.target.value)}
            className="mb-4 p-2 border bg-blue-400 rounded"
          >
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
          </select>

          <DeutschNews />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default DeutschNewsApp;
