import { ReactNode, useEffect, useState } from "react";
import styles from "./SectionScooter.module.css";
import { getScooters } from "../../../../../helpers/api/api";
import { SectionScooterItem } from "../SectionScooterItem/SectionScooterItem";

interface Scooter {
  id: number;
  key: number
  el: ReactNode
}

export const SectionScooter = () => {
  const [state, setState] = useState<Scooter[] | ''>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await getScooters();
            setState(res);
        } catch (error) {
            console.error("Ошибка получения самокатов", error);
        }
    };
    fetchData();
}, []);


  return (
    <div className={styles.scot}>
    <div className={styles.Scooters}>
      {state
        ? state.map((el: Scooter) => <SectionScooterItem key={el.id} el={el} />)
        : null}
    </div>
        </div>
  );
};
