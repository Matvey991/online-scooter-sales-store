
import { memo } from 'react';
import cls from './Footer.module.css'
import { FooterSectionUpper } from './FooterSectionUpper/FooterSectionUpper';
import { FooterSectionMiddle } from './FooterSectionMiddle/FooterSectionMiddle';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface FooterProps {
className?: string;
}

export const Footer = memo(({ className }: FooterProps) => {

    return (
        <footer className={classNames(cls.Footer, {}, [className])}>
            <div>
                <FooterSectionUpper/>
                <FooterSectionMiddle/>
            </div>
        </footer>
    );
});