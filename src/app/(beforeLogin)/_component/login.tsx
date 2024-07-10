"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import zLogo from "../../../../public/zlogo.png";
import style from "./login.module.css";

export default function Login() {
  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  return (
    <main>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <button className={style.closeButton} onClick={onClickClose}>
              <svg
                width={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              >
                <g>
                  <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
              </svg>
            </button>
            <div className={style.iconImage}>
              <Image src={zLogo} alt="logo" width={30} />
            </div>
          </div>
          <div className={style.modalBody}>
            <form className={style.form}>
              <input placeholder="ID를 입력하세요"></input>
              <input placeholder="비밀번호를 입력하세요"></input>
              <hr></hr>
              <button>로그인</button>
              <button>비밀번호를 잊어버렸어요?</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
