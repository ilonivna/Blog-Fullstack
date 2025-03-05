import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import { MenuPosts } from "../MenuPosts/MenuPosts";
import { MenuCategories } from "../MenuCategories/MenuCategories";

export const Menu = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.menuItem}>
        <h2 className={styles.subtitle}>{"What's hot"}</h2>
        <h1 className={styles.title}>{"Most popular"}</h1>
      <MenuPosts withImage={false} />
     </div>

     
      <div className={styles.menuItem}>
        <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
        <h1 className={styles.title}>{"Categories"}</h1>
         <MenuCategories /></div>

   
      <div className={styles.menuItem}>
        <h2 className={styles.subtitle}>{"Chosen by editor"}</h2>
        <h1 className={styles.title}>{"Editor's pick"}</h1>
        <MenuPosts withImage={true} /> </div>

   
    </div>
  );
};
