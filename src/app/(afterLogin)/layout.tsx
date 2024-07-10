import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import zLogo from "../../../public/zlogo.png";
import Follower from "./_component/Follower";
import Logout from "./_component/Logout";
import NavMenu from "./_component/NavMenu";
import Trending from "./_component/Trending";
import style from "./layout.module.css";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <header className={style.container}>
        <div className={style.leftSectionWrapper}>
          <section className={style.leftSection}>
            <div className={style.leftSectionFixed}>
              <div className={style.leftSectionLogo}>
                <Image src={zLogo} alt="logo" width={30} />
              </div>
              <nav className={style.navigationSection}>
                <ul>
                  <NavMenu></NavMenu>
                </ul>
                <Link href="/compose/tweet" className={style.postButton}>
                  게시하기
                </Link>
              </nav>
              <Logout />
            </div>
          </section>
        </div>
        <div className={style.rightSectionWrapper}>
          <div className={style.rightSectionInner}>
            <main className={style.mainSection}>{children}</main>
            <section className={style.trendAndSearchSection}>
              <form className={style.searchForm}>
                <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                  </g>
                </svg>
                <input type="search" placeholder="검색어를 입력해주세요" />
              </form>
              <Trending></Trending>
              <Follower></Follower>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
}
