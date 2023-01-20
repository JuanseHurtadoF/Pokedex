/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";
import Link from "next/link";
import { link } from "@types";
import styles from "@styles/sections/Nav.module.scss";
import typography from "@styles/typography/typography.module.scss";

const navLinks: link[] = [
  {
    text: "Pokedex",
    current: false,
    linkTo: "/app/pokedex",
  },
  {
    text: "Add Pokemon",
    current: false,
    linkTo: "/app/create",
  },
  {
    text: "Profile",
    current: false,
    linkTo: "/app/create",
  },
];

const Nav: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img
            src="/assets/brand/pokedex.png"
            alt="Pokemon Logo Small"
            className={styles.logo}
          ></img>
        </Link>
      </div>
      <div className={styles.linksContainer}>
        {navLinks.map((item) => {
          return (
            <div key={item.text}>
              <Link className={styles.navLink} href={item.linkTo}>
                <p className={typography.navLink}>
                  {item.text}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
