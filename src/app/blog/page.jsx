import React from "react";
import styles from "./CategoryPage.module.css";
import { CardList } from "@/components/CardList/CardList";
import { Menu } from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{cat}</h2>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div> 
    </div>
  );
};

export default BlogPage;
