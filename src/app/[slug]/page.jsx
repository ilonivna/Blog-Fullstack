import { Menu } from "@/components/Menu/Menu";
import styles from "./SinglePostPage.module.css";
import Image from "next/image";
import { Comments } from "@/components/Comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, sunt!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Name of user</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ducimus molestias, illum iste id repudiandae consectetur explicabo nobis quos tempore eaque reprehenderit labore a soluta tenetur, repellendus quod ut? Sunt hic itaque doloremque explicabo laborum amet veritatis, magnam excepturi non provident modi ullam eos impedit commodi perferendis enim, dolores at dolorum sapiente. Officiis fugiat quo delectus optio magnam minima ex dolores voluptate voluptas hic modi, amet dolorum quos sed laudantium autem recusandae, mollitia ad reprehenderit. Quam debitis nemo autem nostrum voluptatem sit laboriosam optio quae officiis, incidunt iure, nobis ab? Quidem ratione exercitationem vero sint doloremque animi laboriosam! Blanditiis, vel!</p>
            
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
