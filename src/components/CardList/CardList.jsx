import React from "react";
import styles from "./cardList.module.css";
import { Pagination } from "../Pagination/Pagination";
import Image from "next/image";
import { Card } from "../Card/Card";

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1>Recent posts</h1>
      <div className={styles.posts}>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
      </div>
      <Pagination />
    </div>
  );
};
