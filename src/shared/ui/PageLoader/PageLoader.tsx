import { memo } from 'react';
import cls from './PageLoader.module.css';
import { Loader } from '../Loader/Loader';
import { classNames } from '../../lib/classNames/classNames';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
));
