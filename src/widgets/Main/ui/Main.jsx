import { memo } from "react";
import styles from "./Main.module.css";
import { SectionNavLover } from "./SectionNavLover/SectionNavLover";
import { SectionScooter } from "./SectionScooters/SectionScooter";
import { SectionYandex } from "./SectionYandex/SectionYandex";

export const Main = memo(() => {
    return (
        <main className={styles.main}>
            <SectionNavLover/>
            <div className={styles.mainLine}>
                <div className={styles.mainBackroundFoneELements}>
                    <article className={styles.mainBackround}>
                        <p className={styles.mainElemetnsNewText}>Новинка</p>
                        <h2 className={styles.mainHeading}>
                            ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN <br /> ОТ ОФИЦИАЛЬНОГО ДИЛЕРА
                        </h2>
                        <p className={styles.mainBackroundDelivery}>
                            с бесплатной доставкой по РФ от 1 дня
                        </p>
                        <button className={styles.mainBackroundButtonCatalog}>
                            Перейти в католог
                        </button>
                        <div className={styles.mainBackroundParagraph}>
                            <img
                                src="/Kirin.svg"
                                alt="."
                                className={styles.mainBackroundParagraphText}
                            />
                        </div>
                        <div className={styles.mainBackroundElements}>
                            <img
                                src="/Samokat.svg"
                                alt="."
                                className={styles.mainBackroundFoto}
                            />
                        </div>
                    </article>
                </div>
            </div>
            <div className={styles.YandexElements}>
                <SectionYandex />
            </div>
            <SectionScooter/>
            <div className={styles.moreScooters}>
            </div>
        </main>
    );
});
