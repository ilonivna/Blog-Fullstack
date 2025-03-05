import React from 'react'
import Link from 'next/link'
import styles from "./menuCategories.module.css";

export const MenuCategories = () => {
  return (


        <div className={styles.categories}>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            Style
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            Style
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            Style
          </Link>
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles.style}`}
          >
            Style
          </Link>
        </div>

  )
}
