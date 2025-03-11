import { Menu } from "@/components/Menu/Menu";
import styles from "./SinglePostPage.module.css";
import Image from "next/image";
import { Comments } from "@/components/Comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  const post = data.posts.find((p) => p.slug === slug);

  if (!post) {
    throw new Error("Post not found");
  }

  return post;
};








const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  const { title, createdAt, desc, img, catSlug, user } = data;

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{user}</span>
              <span className={styles.date}></span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src={img} alt={title} fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        
        <div className={styles.comment}>
        <div className={styles.post} dangerouslySetInnerHTML={{ __html: desc }}/>
        <Comments />
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
