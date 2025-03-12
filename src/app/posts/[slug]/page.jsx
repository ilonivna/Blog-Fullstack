import { Menu } from "@/components/Menu/Menu";
import styles from "./SinglePostPage.module.css";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.post.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data.user.name}</span>
              <span className={styles.date}>{data.post.createdAt.substring(0,10)}</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src={data.post.img} alt={data.post.title} fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        
        <div className={styles.comment}>
        <div className={styles.post} dangerouslySetInnerHTML={{ __html: data.post.desc }}/>
        <Comments postSlug={slug}/>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
