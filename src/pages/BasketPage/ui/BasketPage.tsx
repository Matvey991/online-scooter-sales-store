import React, { memo } from "react";
import cls from './BasketPage.module.css'
import { SectionNavLover } from "../../../components/Layout/widgets/Main/ui/SectionNavLover/SectionNavLover";
import { Navbar } from "../../../components/Layout/widgets/Navbar/Navbar";
import BasketEmpty from "./BasketEmpty/BasketEmpty";

const BasketPage = memo(() => {
  return (
    <div>
      <div className={cls.BasketPage}>
        <SectionNavLover />
        <div className={cls.BasketPageContainer}>
          <div className={cls.Navbar}>
            <Navbar />
          </div>
            <h1 className={cls.MyBasketHeading}>МОЯ КОРЗИНА</h1>
          <div className={cls.BasketEmpty}>
          <BasketEmpty />
          </div>
        </div>
      </div>
    </div>
  )
});

export default BasketPage