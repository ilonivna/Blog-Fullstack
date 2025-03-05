import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

import React from "react";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.11.2025</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/"><h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, sapiente?</h3></Link>
        
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et soluta modi tenetur accusantium repudiandae blanditiis facilis quam quibusdam, nihil laboriosam voluptas. Exercitationem, adipisci ea non officiis laboriosam, suscipit dolores quo repellat dolore quidem molestias praesentium temporibus odio quod, alias recusandae.</p>
        <Link href="/" className={styles.link}>Read more...</Link>
      </div>
    </div>
  );
};
