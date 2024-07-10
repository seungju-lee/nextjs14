"use client";

import { useState } from "react";
import style from "./tab.module.css";

export default function Tab() {
  const [tab, setTab] = useState("rec");

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFollowing = () => {
    setTab("fol");
  };

  return (
    <section className={style.container}>
      <div className={style.item} onClick={onClickRec}>
        <div
          className={`${style.itemContainer} ${tab == "rec" ? style.itemContainerActive : ""}`}
        >
          For you
        </div>
      </div>
      <div className={style.item} onClick={onClickFollowing}>
        <div
          className={`${style.itemContainer} ${tab == "fol" ? style.itemContainerActive : ""}`}
        >
          Following
        </div>
      </div>
    </section>
  );
}
