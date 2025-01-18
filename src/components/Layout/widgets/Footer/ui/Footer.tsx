
import { memo } from 'react';
import { classNames } from '../../../../../shared/lib/classNames/classNames';
import cls from './Footer.module.css'
import { FooterSectionUpper } from './FooterSectionUpper/FooterSectionUpper';
import { FooterSectionMiddle } from './FooterSectionMiddle/FooterSectionMiddle';

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