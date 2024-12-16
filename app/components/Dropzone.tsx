"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop: (acceptedFiles) => console.log("Accepted files:", acceptedFiles),
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
    },
    maxSize: 5000000,
  });

  const renderRejectionMessages = () =>
    fileRejections.map(({ file, errors }, index) => (
      <div key={index} style={{ color: "red", marginTop: "10px" }}>
        <strong>{file.name}</strong>
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </div>
    ));

  return (
    <section className="m-4">
      <div
        {...getRootProps()}
        className={cn(
          "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center cursor-pointer  ",
          isDragActive
            ? "bg-[#035FFE] text-white animate-pulse "
            : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
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

      {fileRejections.length > 0 && renderRejectionMessages()}
    </section>
  );
}

export default MyDropzone;
