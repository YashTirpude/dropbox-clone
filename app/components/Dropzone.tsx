"use client";

import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("File reading was aborted");
      reader.onerror = () => console.log("File reading has failed");
      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadPost = async (file: File) => {
    if (loading) return;
    if (!user) return;

    setLoading(true);
    console.log("Uploading file:", file.name);

    try {
      // Simulate upload logic (replace with actual API call)
      const formData = new FormData();
      formData.append("file", file);

      // Example upload request
      // await fetch("/api/upload", { method: "POST", body: formData });
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxSize: 5000000, // 5MB
  });

  const renderRejectionMessages = () =>
    fileRejections.map(({ file, errors }, index) => (
      <div key={index} style={{ color: "red", marginTop: "10px" }}>
        <strong>{file.name}</strong>
        <ul>
          {errors.map((e) => (
            <li key={e.code}>
              {e.code === "file-too-large"
                ? "File size exceeds 5MB."
                : "Unsupported file type."}
            </li>
          ))}
        </ul>
      </div>
    ));

  return (
    <section className="m-4">
      <div
        {...getRootProps()}
        className={cn(
          "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center cursor-pointer transition-all ",
          isDragActive
            ? "bg-[#035FFE] text-white animate-pulse"
            : "hover:bg-blue-200 bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
        )}
      >
        <input {...getInputProps()} />
        {!isDragActive && !isDragReject && (
          <p>Click here or drag a file to upload.</p>
        )}
        {isDragActive && !isDragReject && <p>Drop the file here to upload!</p>}
        {isDragReject && (
          <p style={{ color: "red" }}>File type not accepted!</p>
        )}
      </div>

      {loading && (
        <p className="text-blue-500 mt-2 animate-pulse">Uploading file...</p>
      )}

      {fileRejections.length > 0 && renderRejectionMessages()}
    </section>
  );
}

export default MyDropzone;
