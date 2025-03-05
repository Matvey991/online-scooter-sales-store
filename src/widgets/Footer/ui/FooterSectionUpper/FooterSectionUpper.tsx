import { memo } from 'react';
import cls from './FooterSectionUpper.module.css'
import { classNames } from '../../../../shared/lib/classNames/classNames';

interface FooterSectionUpperProps {
className?: string;
}

export const FooterSectionUpper = memo(({ className }: FooterSectionUpperProps) => {
    return (
        <section className={classNames(cls.FooterSectionUpper, {}, [className])}>
            <div className={cls.Content}>
                <div className={cls.ContentHeadingDiv}>
                    <h1 className={cls.ContentHeading}>
                        Оставьте свою почту и станьте первым, 
                        <br/> 
                        кто получит скидку на новые самокаты
                    </h1>
                </div>
                <div className={cls.inputAndBtn}>
                    <input className={cls.input} placeholder='Введите Ваш email' />
                    <button className={cls.Btn}>Подписаться</button>
                </div>
            </div>
        </section>
    );
});