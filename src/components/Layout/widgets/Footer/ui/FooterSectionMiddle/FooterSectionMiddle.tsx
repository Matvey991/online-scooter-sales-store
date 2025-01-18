
import { classNames } from '../../../../../../shared/lib/classNames/classNames';
import cls from './FooterSectionMiddle.module.css'

interface FooterSectionMiddleProps {
    className?: string;
}

export const FooterSectionMiddle = ({ className }: FooterSectionMiddleProps) => {
    return (
        <section className={classNames(cls.FooterSectionMiddle, {}, [className])}>
            <div className={cls.FooterSectionMiddleContainer}>
                <div className={cls.Sections}>
                    <div className={cls.Section1}>
                        <h1>Каталог товаров</h1>
                        <div className={cls.buttons}>
                            <button>Электросамокаты</button>
                            <button>Электроскутеры</button>
                            <button>Электровелосипеды</button>
                            <button>Электровелосипеды</button>
                        </div>
                    </div>
                    <div className={cls.Section2}>
                        <h1>Каталог товаров</h1>
                        <div className={cls.buttons}>
                            <button>Электросамокаты</button>
                            <button>Электроскутеры</button>
                            <button>Электровелосипеды</button>
                            <button>Электровелосипеды</button>
                        </div>
                        <div className={cls.buttons2}>
                            <button>Электросамокаты</button>
                            <button>Электроскутеры</button>
                            <button>Электровелосипеды</button>
                            <button>Электровелосипеды</button>
                        </div>
                    </div>
                    <div className={cls.Section3}>

                    </div>
                </div>
            </div>
        </section>
    );
};