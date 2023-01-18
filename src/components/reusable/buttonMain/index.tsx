import styles from "@styles/reusable/ButtonMain.module.scss";
import typography from "@styles/typography/typography.module.scss";
import { button } from "@/types/button/button";
import { FunctionComponent } from "react";
import Link from "next/link";

const ButtonMain: FunctionComponent<button> = ({ text, linkTo }) => {
  return (
    <>
      <Link className={styles.link} href={linkTo}>
        <div className={styles.button}>
          <p className={typography.buttonPrimary}>{text}</p>
        </div>
      </Link>
    </>
  );
};

export default ButtonMain;
