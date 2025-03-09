"use client";

import React, { useState, useEffect } from "react";
import styles from "./WritePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill-new";
import "react-quill/dist/quill.snow.css";
import { FaPlus } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { CiLink } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />

      <div className={styles.btnCont}>      
        <select className={styles.select}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <IoIosArrowDown className={styles.arrow} />
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <FaPlus color="grey" />
          </button>
          {open && (
            <div className={styles.add}>
              <button className={styles.addButton}>
                <CiImageOn color="grey" size={28}/>
              </button>
              <button className={styles.addButton}>
                <CiLink color="grey" size={28}/>
              </button>
              <button className={styles.addButton}>
                <CiVideoOn color="grey" size={28}/>
              </button>
            </div>
          )}
        </div>
      <div className={styles.editor}>
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
