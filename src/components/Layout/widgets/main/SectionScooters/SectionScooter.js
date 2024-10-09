import { useEffect, useState } from "react";
import styles from "./SectionScooter.module.css";
import { getScooters } from "../../../../../../src/helpers/api/api";
import { SectionScooterItem } from "../SectionScooterItem/SectionScooterItem";

export const SectionScooter = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    getScooters().then((res) => setState(res));
  }, []);

  return (
    <div>
      <div className={styles.Scooters}>
        {state
          ? state.map((el) => <SectionScooterItem key={el.id} el={el} />)
          : null}
      </div>
    </div>
  );
};
