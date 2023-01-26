import { PokemonType } from "@/types";
import { FunctionComponent } from "react";
import typography from "@styles/typography/typography.module.scss";
import styles from "@styles/reusable/pokemon/Tag.module.scss";

type Props = {
  type: PokemonType;
};

const Tag: FunctionComponent<Props> = ({ type }) => {
  return (
    <div data--type={type} className={`${styles.tag} ${typography.typeTag}`}>
      {type}
    </div>
  );
};

export default Tag;
