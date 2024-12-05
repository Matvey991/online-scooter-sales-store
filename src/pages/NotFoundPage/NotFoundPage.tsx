import React from 'react';
import cls from './NotFoundPage.module.css'

export const NotFoundPage = () => {
    return (
        <div className={cls.NotFoundPage}>
       <h1 className={cls.NotFoundPageH1}>Страница не найдена</h1>
       <p>Возможно вы указали не тот адрес</p>
        </div>
    );
};

