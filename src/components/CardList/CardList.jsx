import React from "react";
import styles from "./cardList.module.css";
import { Pagination } from "../Pagination/Pagination";
import Image from "next/image";
import { Card } from "../Card/Card";

const getData = async (page, cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

   


  return res.json();
};

export const CardList = async ({ page, cat }) => {
  const {posts, count} = await getData(page, cat);

  const POSTS_PER_PAGE = 2;

  const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
  const hasNext = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;


  return (
    <div className={styles.container}> 
      <h1>Recent posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
  );
};
