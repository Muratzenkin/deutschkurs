// src/App.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useNewsStore } from "../../zustand/store";
import DeutschNews from "./DeutschNews";

const queryClient = new QueryClient();

const DeutschNewsApp: React.FC = () => {
  const setCategory = useNewsStore((state) => state.setCategory);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4 mt-16">
        <h1 className="text-2xl font-bold mb-4">News App</h1>

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
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
    </QueryClientProvider>
  );
};

export default DeutschNewsApp;
