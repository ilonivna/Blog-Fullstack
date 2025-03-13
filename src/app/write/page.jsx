"use client";

import React, { useState, useRef  } from "react";
import styles from "./WritePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.snow.css";
import { FaPlus } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { CiLink } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import FadeLoader from "react-spinners/ClipLoader";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");


  // UPLOADING LOGIC
    // const fileInputRef = useRef(null);// const [file, setFile] = useState(null);
  // const [uploading, setUploading] = useState(false);
  // const [imageUrl, setImageUrl] = useState("");

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleUpload = async () => {
  //   if (!file) {
  //     alert("Please select a file.");
  //     return;
  //   }
  
  //   setUploading(true);
  
  //   const formData = new FormData();
  //   formData.append("file", file);
  
  //   try {
  //     const res = await fetch("/api/upload", {
  //       method: "POST",
  //       body: formData,
  //     });
  
  //     if (!res.ok) {
  //       const data = await res.json();
  //       alert(data.error || "Upload failed.");
  //       return;
  //     }
  
  //     const data = await res.json();
  //     setImageUrl(data.url);
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //     alert("Upload failed.");
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        slug: slugify(title),
        catSlug: catSlug || "style", 
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>

      <input type="text" placeholder="Title" className={styles.input}         onChange={(e) => setTitle(e.target.value)}/>

      <div className={styles.btnCont}>
        <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <IoIosArrowDown className={styles.arrow} />
        {/* <button className={styles.button} onClick={() => setOpen(!open)}>
          <FaPlus color="grey" />
        </button>
        {open && (
          <div className={styles.add}>
            <input
  type="file"
  ref={fileInputRef}
  id="image"
  onChange={handleFileChange}
  style={{ display: "none" }}
/>

           
            <button
              className={styles.addButton}
              onClick={() => fileInputRef.current?.click()} 
              disabled={uploading}
            >
              <CiImageOn color="grey" size={28} />
            </button>
            <button
              className={styles.uploadButton}
              onClick={handleUpload}
              disabled={uploading || !file}
            >

            </button>

            {imageUrl && (
              <p>
                File URL:
                <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                  {imageUrl}
                </a>
              </p>
            )}

            <button className={styles.addButton}>
              <CiLink color="grey" size={28} />
            </button>
            <button className={styles.addButton}>
              <CiVideoOn color="grey" size={28} />
            </button>
          </div>
        )} */}
      </div>
      <div className={styles.editor}>
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>Publish</button>
    </div>
  );
};

export default WritePage;
