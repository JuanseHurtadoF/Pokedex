import { RootState } from "@/store";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styles from "@styles/reusable/pagination.module.scss";

type Props = {
  currentPage: number;
  changePage: (goTo: number) => void;
};

const Pagination: FunctionComponent<Props> = ({ currentPage, changePage }) => {
  const filteredPokemon = useSelector(
    (state: RootState) => state.pokemon.filteredPokemon
  );

  const numberOfPages = Math.ceil(filteredPokemon.length / 8);
  let pagesArray: number[] = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pagesArray.push(i);
  }

  return (
    <div className={styles.container}>
      <button
        className={
          currentPage != 1
            ? `${styles.arrow}`
            : `${styles.arrow} ${styles.arrowHidden}`
        }
        onClick={() => {
          changePage(currentPage - 1);
        }}
      >
        <svg
          className={styles.arrowIcon}
          width="9"
          height="12"
          viewBox="0 0 9 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.16 1.41L3.58 6L8.16 10.59L6.75 12L0.750004 6L6.75 0L8.16 1.41Z"
            fill="#C4CDD5"
          />
        </svg>
      </button>

      {pagesArray.map((item, index) => {
        return (
          <button
            className={styles.numberButton}
            onClick={() => {
              changePage(item);
            }}
            key={item}
          >
            {item}
          </button>
        );
      })}

      <button
        className={
          currentPage < numberOfPages
            ? `${styles.arrow}`
            : `${styles.arrow} ${styles.arrowHidden}`
        }
        onClick={() => {
          changePage(currentPage + 1);
        }}
      >
        <svg
          width="9"
          height="12"
          viewBox="0 0 9 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.arrowIcon}
            d="M0.839996 1.41L5.42 6L0.839996 10.59L2.25 12L8.25 6L2.25 0L0.839996 1.41Z"
            fill="#C4CDD5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
