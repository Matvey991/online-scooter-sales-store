import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.css'

export enum ButtonSize {
    SIZE_M = 'size_m',
    SIZE_L = 'size_l',
    SIZE_XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    width?: string;
    height?: string;
    size?: ButtonSize;
}

export const Button = memo((props: ButtonProps) => {

    const {
        className,
        size = ButtonSize.SIZE_M,
        children,
        ...otherProps

    } = props

    const additional: Array<string | undefined> = [className, cls[size]];


    return (

        <button
            className={
                classNames(cls.Button, {}, additional)
            }
            type='button'
            {...otherProps}
        >
            {children}
        </button>
    );
});