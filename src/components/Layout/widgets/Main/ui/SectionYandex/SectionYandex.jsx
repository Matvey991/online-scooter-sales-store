import React from "react";
import styles from "./SectionYandex.module.css";

export const SectionYandex = () => {
  return (
    <section className={styles.section}>
      <div className={styles.AdditionalInformationParagraphs}>
        <div className={styles.AdditionalInformationNumber1}>
          <h2 className={styles.HeadingtextNumber1}>ГАРАНТИЯ 1 ГОД</h2>
          <p className={styles.ParagraphNumber1}>на весь ассортимент</p>
        </div>
        <div className={styles.AdditionalInformationNumber2}>
          <h1 className={styles.HeadingtextNumber2}>РАССРОЧКА</h1>
          <p className={styles.ParagraphNumber2}>от 6 месяцев</p>
        </div>
        <div className={styles.AdditionalInformationNumber3}>
          <h1 className={styles.HeadingtextNumber3}>ПОДАРКИ</h1>
          <p className={styles.ParagraphNumber3}>и бонусам к покупкам </p>
        </div>
        <div className={styles.AdditionalInformationNumber4}>
          <div className={styles.YandexElements}>
            <div className={styles.BackroundYandex}>
              <img src="/Glyph.svg" alt="." className={styles.YandexLogo} />
            </div>
            <div className={styles.YandexRatingAndParagraph}>
              <p className={styles.YandexParagraph}>Яндекс отзывы</p>
              <div className={styles.YandexStarAndHeading}>
                <img src="/Star.svg" alt="." className={styles.Star} />
                <h1>4,9</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
