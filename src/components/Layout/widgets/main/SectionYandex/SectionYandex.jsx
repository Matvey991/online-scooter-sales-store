import React from "react";
import styles from "./SectionYandex.module.css";

export const SectionYandex = () => {
  return (
    <section>
      <div className={styles.AdditionalInformationParagraphs}>
        <div className={styles.AdditionalInformationNumber1}>
          <h2 className={styles.footerHeadingtextNumber1}>ГАРАНТИЯ 1 ГОД</h2>
          <p className={styles.footerParagraphNumber1}>на весь ассортимент</p>
        </div>
        <div className={styles.footerAdditionalInformationNumber2}>
          <h1 className={styles.footerHeadingtextNumber2}>РАССРОЧКА</h1>
          <p className={styles.footerParagraphNumber2}>от 6 месяцев</p>
        </div>
        <div className={styles.footerAdditionalInformationNumber3}>
          <h1 className={styles.footerHeadingtextNumber3}>ПОДАРКИ</h1>
          <p className={styles.footerParagraphNumber3}>и бонусам к покупкам </p>
        </div>
        <div className={styles.footerAdditionalInformationNumber4}>
          <div className={styles.footerYandexElements}>
            <div className={styles.footerBackroundYandex}>
              <img
                src="/Glyph.svg"
                alt="."
                className={styles.footerYandexLogo}
              />
            </div>
            <div className={styles.footerYandexRatingAndParagraph}>
              <p className={styles.footerYandexParagraph}>Яндекс отзывы</p>
              <div className={styles.footerYandexStarAndHeading}>
                <img src="/Star.svg" alt="." className={styles.footerStar} />
                <h1>4,9</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
