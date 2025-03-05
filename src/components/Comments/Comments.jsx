import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments</h3>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            className={styles.input}
            placeholder="Leave your comment here..."
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to leave a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} />
            <div className={styles.userInfo}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>11.11.25</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ratione, deserunt saepe vero praesentium rerum rem alias ex error laboriosam.</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} />
            <div className={styles.userInfo}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>11.11.25</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ratione, deserunt saepe vero praesentium rerum rem alias ex error laboriosam.</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} />
            <div className={styles.userInfo}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>11.11.25</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ratione, deserunt saepe vero praesentium rerum rem alias ex error laboriosam.</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} />
            <div className={styles.userInfo}>
                <span className={styles.username}>John Doe</span>
                <span className={styles.date}>11.11.25</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ratione, deserunt saepe vero praesentium rerum rem alias ex error laboriosam.</p>
        </div>

      </div>
    </div>
  );
};
