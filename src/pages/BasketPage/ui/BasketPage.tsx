import React, { memo } from "react";
import cls from './BasketPage.module.css'
import BasketEmpty from "./BasketEmpty/BasketEmpty";
import { SectionNavLover } from "../../../widgets/Main/ui/SectionNavLover/SectionNavLover";
import { Navbar } from "../../../widgets/Navbar/Navbar";
import { Footer } from "../../../widgets/Footer";

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
                <div className={cls.Footer}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
});

export default BasketPage