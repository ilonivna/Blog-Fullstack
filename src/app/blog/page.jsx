import React from 'react';
import styles from "./CategoryPage.module.css";
import { CardList } from '@/components/CardList/CardList';
import { Menu } from '@/components/Menu/Menu';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Category</h2>
      <div className={styles.content}>
        <CardList/>
        <Menu />
      </div>
    </div>
  )
}


export default BlogPage;