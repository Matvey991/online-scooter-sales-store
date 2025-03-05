import {  useEffect, useState } from "react";
import styles from "./SectionScooter.module.css";
import { SectionScooterItem } from "../SectionScooterItem/ui/SectionScooterItem";
import { ScooterItem } from "../SectionScooterItem/model/types/scooterItem";
import { getScooters } from "../../../../helpers/api/api";

export const SectionScooter = () => {
    const [state, setState] = useState<ScooterItem[] | ''>('');

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
                    ? state.map((el) => <SectionScooterItem key={el.id} el={el} />)
                    : null}
            </div>
        </div>
    );
};
