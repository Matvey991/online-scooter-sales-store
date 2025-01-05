
import { memo } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Footer.module.css'

interface FooterProps {
className?: string;
}

export const Footer = memo(({ className }: FooterProps) => {

return (
<footer className={classNames(cls.Footer, {}, [className])}>

</footer>
);
});