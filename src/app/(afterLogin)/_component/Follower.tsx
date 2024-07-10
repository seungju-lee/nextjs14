import Image from "next/image";
import style from "./follower.module.css";

export default function Follower() {
  const follower = {
    name: "맹구123",
    tagName: "@mang123",
    image: "/zlogo.png",
  };

  return (
    <section className={style.container}>
      <ul>
        <h1>Follower</h1>
        <li>
          <div className={style.imageWrapper}>
            <Image
              src={follower.image}
              alt="progileImage"
              className={style.roundedImage}
              width={30}
              height={30}
            ></Image>
          </div>
          <div className={style.followerTextSection}>
            <span className={style.followerName}>{follower.name}</span>
            <span className={style.followerTagName}>{follower.tagName}</span>
          </div>
        </li>
        <li>
          <div className={style.imageWrapper}>
            <Image
              src={follower.image}
              alt="progileImage"
              className={style.roundedImage}
              width={30}
              height={30}
            ></Image>
          </div>
          <div className={style.followerTextSection}>
            <span className={style.followerName}>{follower.name}</span>
            <span className={style.followerTagName}>{follower.tagName}</span>
          </div>
        </li>
        <li>
          <div className={style.imageWrapper}>
            <Image
              src={follower.image}
              alt="progileImage"
              className={style.roundedImage}
              width={30}
              height={30}
            ></Image>
          </div>
          <div className={style.followerTextSection}>
            <span className={style.followerName}>{follower.name}</span>
            <span className={style.followerTagName}>{follower.tagName}</span>
          </div>
        </li>
        <li>
          <div className={style.imageWrapper}>
            <Image
              src={follower.image}
              alt="progileImage"
              className={style.roundedImage}
              width={30}
              height={30}
            ></Image>
          </div>
          <div className={style.followerTextSection}>
            <span className={style.followerName}>{follower.name}</span>
            <span className={style.followerTagName}>{follower.tagName}</span>
          </div>
        </li>
        <li>
          <div className={style.imageWrapper}>
            <Image
              src={follower.image}
              alt="progileImage"
              className={style.roundedImage}
              width={30}
              height={30}
            ></Image>
          </div>
          <div className={style.followerTextSection}>
            <span className={style.followerName}>{follower.name}</span>
            <span className={style.followerTagName}>{follower.tagName}</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
