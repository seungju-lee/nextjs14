"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "./logout.module.css";

export default function Logout() {
  const router = useRouter();

  const me = {
    id: "lee",
    name: "안녕하세요",
    mail: "lee@naver.com",
    profileImage: "/zlogo.png",
  };
  const oncClickLogout = () => {
    if (me) {
      router.replace("/");
    }
  };

  return (
    <>
      <button onClick={oncClickLogout} className={style.container}>
        <div className={style.icon}>
          <Image src={me.profileImage} alt="zlogo" width={24} height={24} />
        </div>
        <div className={style.userInfo}>
          <div>{me.name}</div>
          <div>{me.mail}</div>
        </div>
      </button>
    </>
  );
}
