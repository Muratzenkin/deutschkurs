import { useState } from "react";
import { useUploadStore } from "../../zustand/store";

function Homework() {
  const [file, setFile] = useState<File | null>(null);
  const isUploading = useUploadStore((state) => state.isUpLoading);
  const setUploading = useUploadStore((state) => state.setUpLoading);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/uploadHomework", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Yükleme işlemi başarısız oldu.");
      }

      alert("Ödev yüklendi!");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Öğrenci Paneli</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isUploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isUploading}
        >
          {isUploading ? "Yükleniyor..." : "Ödevi Yükle"}
        </button>
      </form>
    </div>
  );
}

export default Homework;
