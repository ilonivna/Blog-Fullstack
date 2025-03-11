import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

import React from "react";


export const Card = ({key, item}) => {
  const {title, createdAt, desc, img, catSlug, slug} = item;
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={img} alt={slug} fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{createdAt.substring(0,10)}</span>
          <span className={styles.category}>{catSlug}</span>
        </div>
        <Link href={`/posts/${slug}`}><h3>{title}</h3></Link>
        
        <p className={styles.desc}>{desc.substring(0,100)}</p>
        <Link href={`/posts/${slug}`} className={styles.link}>Read more...</Link>
      </div>
    </div>
  );
};
