import React from "react";
import styles from "./styles.module.css";
import { ReactComponent as Glyph } from "../../../helpers/icons/Glyph.svg";
import { ReactComponent as Star } from "../../../helpers/icons/Star.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerAdditionalInformationParagraphs}>
        <div className={styles.footerAdditionalInformationNumber1}>
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
              <Glyph className={styles.footerYandexLogo} />
            </div>
            <div className={styles.footerYandexRatingAndParagraph}>
              <p className={styles.footerYandexParagraph}>Яндекс отзывы</p>
              <div className={styles.footerYandexStarAndHeading}>
                <Star className={styles.footerStar} />
                <h1>4,9</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
