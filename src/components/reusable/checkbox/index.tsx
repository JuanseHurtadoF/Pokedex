import { PokemonType } from "@/types";
import { FunctionComponent } from "react";
import styles from "@styles/reusable/checkbox.module.scss";
import typography from "@styles/typography/typography.module.scss";

type Props = {
  type: PokemonType;
  onChangeFuntion: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: FunctionComponent<Props> = ({ type, onChangeFuntion }) => {
  return (
    <>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={type}
        name={type}
        value={type}
        onChange={onChangeFuntion}
      />
      <label htmlFor={type} data--type={type} className={typography.typeTag}>
        {type}
      </label>
    </>
  );
};

export default CheckBox;
